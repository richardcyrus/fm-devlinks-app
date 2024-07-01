import type { ButtonHTMLAttributes } from 'react'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { z } from 'zod'

import './profileButton.css'

const platformStoreSchema = z.object({
  label: z.string(),
  variant: z.string(),
})

const platformMapSchema = z.map(z.string(), platformStoreSchema)
const profileUrlSchema = z.string().url()

type PlatformStoreMap = z.infer<typeof platformMapSchema>
type ProfileUrl = z.infer<typeof profileUrlSchema>

const platformStore: PlatformStoreMap = new Map([
  ['codepen', { label: 'CodePen', variant: 'codepen' }],
  ['codewars', { label: 'Codewars', variant: 'codewars' }],
  ['devTo', { label: 'Dev.to', variant: 'dev-to' }],
  ['facebook', { label: 'Facebook', variant: 'facebook' }],
  ['freeCodeCamp', { label: 'freeCodeCamp', variant: 'freecodecamp' }],
  ['frontendMentor', { label: 'Frontend Mentor', variant: 'frontend-mentor' }],
  ['github', { label: 'GitHub', variant: 'github' }],
  ['gitlab', { label: 'GitLab', variant: 'gitlab' }],
  ['hashnode', { label: 'Hashnode', variant: 'hashnode' }],
  ['linkedIn', { label: 'LinkedIn', variant: 'linkedin' }],
  ['stackOverflow', { label: 'Stack Overflow', variant: 'stack-overflow' }],
  ['twitch', { label: 'Twitch', variant: 'twitch' }],
  ['twitter', { label: 'Twitter', variant: 'twitter' }],
  ['youtube', { label: 'YouTube', variant: 'youtube' }],
])

/**
 * Retrieves platform variants from the platform store.
 *
 * @return {Record<string, string>} The platform variants
 */
function getPlatformVariants(): Record<string, string> {
  const variants: Record<string, string> = {}

  for (const [key, value] of platformStore.entries()) {
    variants[key] = value.variant
  }

  return variants
}

/**
 * Retrieves platform labels from the platform store and returns them as a map.
 *
 * @return {Map<string, string>} The map of platform labels.
 */
function getPlatformLabels(): Map<string, string> {
  const labels: Map<string, string> = new Map()

  for (const [key, value] of platformStore.entries()) {
    labels.set(key, value.label)
  }

  return labels
}

const profileButtonVariants = cva('profile-button', {
  variants: {
    platform: getPlatformVariants(),
  },
})

type ProfileButtonVariantProps = VariantProps<typeof profileButtonVariants>
interface ProfileButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ProfileButtonVariantProps {
  profileUrl: ProfileUrl
}

/**
 * Asynchronously copies the given text to the clipboard using the navigator API if available,
 * otherwise uses document.execCommand.
 *
 * @param {string} text - The text to be copied to the clipboard.
 * @return {Promise<void>} A Promise that resolves once the text is successfully copied to the clipboard.
 */
async function copyToClipboard(text: string): Promise<void> {
  return await navigator.clipboard.writeText(text)
}

/**
 * Renders a profile button with the specified platform, class name, and profile URL.
 *
 * @param className
 * @param platform
 * @param profileUrl
 * @param {ProfileButtonProps} props - The properties for the profile button
 * @return {JSX.Element} A button component representing the profile button
 */
export function ProfileButton({
  className,
  platform,
  profileUrl,
  ...props
}: ProfileButtonProps) {
  const labels = getPlatformLabels()

  const handleCopyClick = async () => {
    await copyToClipboard(profileUrl)
  }

  return (
    <button
      type="button"
      className={profileButtonVariants({ platform, className })}
      data-clipboard-text={profileUrl}
      onClick={handleCopyClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {labels.get(platform as string)}
    </button>
  )
}
