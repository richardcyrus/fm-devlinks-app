import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import './button.css'

const button = cva('button', {
  variants: {
    intent: {
      primary: ['primary'],
      secondary: ['secondary'],
    },
    size: {
      medium: ['medium'],
      full: ['full'],
    },
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

interface AnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {}

export function Button({ className, intent, size, ...props }: ButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button className={button({ intent, size, className })} {...props} />
}

export function LinkButton({
  children,
  className,
  intent,
  size,
  ...props
}: AnchorProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a className={button({ intent, size, className })} {...props}>
      {children}
    </a>
  )
}
