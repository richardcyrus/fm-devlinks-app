import type { InputHTMLAttributes } from 'react'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import './inputElement.css'

const inputElementVariants = cva('input', {
  variants: {
    intent: {
      default: ['default'],
      email: ['email'],
      password: ['password'],
      link: ['link'],
    },
  },
})

interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputElementVariants> {}

export function InputElement({
  className,
  intent,
  ...props
}: InputElementProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <input className={inputElementVariants({ intent, className })} {...props} />
  )
}
