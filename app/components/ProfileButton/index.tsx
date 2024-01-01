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

function getPlatformVariants() {
  const variants: Record<string, string> = {}

  for (const [key, value] of platformStore.entries()) {
    variants[key] = value.variant
  }

  return variants
}

function getPlatformLabels() {
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

export function ProfileButton({
  className,
  platform,
  profileUrl,
  ...props
}: ProfileButtonProps) {
  const labels = getPlatformLabels()

  return (
    <button
      type="button"
      className={profileButtonVariants({ platform, className })}
      data-clipboard-text={profileUrl}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {labels.get(platform as string)}
    </button>
  )
}
