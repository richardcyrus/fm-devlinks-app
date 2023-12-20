import type { ButtonHTMLAttributes } from 'react'

import type { LinkProps, NavLinkProps } from '@remix-run/react'
import { Link, NavLink } from '@remix-run/react'
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

const navigationButton = cva('button', {
  variants: {
    intent: {
      default: 'default',
      primary: 'primary',
      secondary: 'secondary',
    },
    kind: {
      links: 'links',
      profile: 'profile',
      preview: 'preview',
    },
    size: {
      medium: 'medium',
      full: 'full',
      icon: 'icon-only',
    },
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

interface LinkButtonProps extends LinkProps, VariantProps<typeof button> {}

interface NavButtonProps
  extends NavLinkProps,
    VariantProps<typeof navigationButton> {}

export function Button({ className, intent, size, ...props }: ButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button className={button({ intent, size, className })} {...props} />
}

export function LinkButton({
  children,
  to,
  className,
  intent,
  size,
  ...props
}: LinkButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={to} className={button({ intent, size, className })} {...props}>
      {children}
    </Link>
  )
}

export function NavButton({
  children,
  to,
  className,
  intent,
  kind,
  size,
  ...props
}: NavButtonProps) {
  return (
    <NavLink
      to={to}
      className={navigationButton({ intent, kind, size, className })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </NavLink>
  )
}
