import * as React from 'react'

import * as Select from '@radix-ui/react-select'
import type { SelectItemProps, SelectProps } from '@radix-ui/react-select'

import ChevronIcon from '~/assets/images/icon-chevron-down.svg?react'

import './SelectField.css'

interface MySelectItemProps extends SelectItemProps {
  className?: string
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(function SelectItem(
  // eslint-disable-next-line react/prop-types
  { children, className, ...props }: MySelectItemProps,
  forwardedRef
) {
  return (
    <Select.Item
      className={`select-item ${className}`}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
})

export function SelectField(props: SelectProps) {
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Select.Root {...props}>
      <Select.Trigger className="select-trigger" aria-label="Platform">
        <Select.Value
          placeholder={
            <span className="select-item-content">
              <span className="icon link" />
              Select a platform
            </span>
          }
        />
        <Select.Icon className="select-icon">
          <ChevronIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content
        className="select-content"
        position="popper"
        sideOffset={16}
      >
        <Select.ScrollUpButton className="select-scroll-button">
          <ChevronIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="select-viewport">
          <SelectItem value="https://github.com/johnappleseed">
            <span className="select-item-content">
              <span className="icon github" />
              GitHub
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://www.frontendmentor.io/profile/johnappleseed">
            <span className="select-item-content">
              <span className="icon frontend-mentor" />
              Frontend Mentor
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://twitter.com/johnappleseed">
            <span className="select-item-content">
              <span className="icon twitter" />
              Twitter
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://www.linkedin.com/in/johnappleseed/">
            <span className="select-item-content">
              <span className="icon linked-in" />
              LinkedIn
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://www.youtube.com/@johnapplessed">
            <span className="select-item-content">
              <span className="icon youtube" />
              YouTube
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://www.facebook.com/john.appleseed">
            <span className="select-item-content">
              <span className="icon facebook" />
              Facebook
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://twitch.tv/johnappleseed">
            <span className="select-item-content">
              <span className="icon twitch" />
              Twitch
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://dev.to/johnappleseed">
            <span className="select-item-content">
              <span className="icon dev-to" />
              Dev.to
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://www.codewars.com/users/johnappleseed">
            <span className="select-item-content">
              <span className="icon codewars" />
              Codewars
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://codepen.io/johnappleseed">
            <span className="select-item-content">
              <span className="icon codepen" />
              Codepen
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://www.freecodecamp.org/johnappleseed">
            <span className="select-item-content">
              <span className="icon free-code-camp" />
              freeCodeCamp
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://gitlab.com/johnappleseed">
            <span className="select-item-content">
              <span className="icon gitlab" />
              GitLab
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://johnappleseed.hashnode.dev">
            <span className="select-item-content">
              <span className="icon hashnode" />
              Hashnode
            </span>
          </SelectItem>
          <Select.Separator className="select-separator" />
          <SelectItem value="https://stackoverflow.com/users/12345678/john-appleseed">
            <span className="select-item-content">
              <span className="icon stack-overflow" />
              Stack Overflow
            </span>
          </SelectItem>
        </Select.Viewport>
        <Select.ScrollDownButton className="select-scroll-button">
          <ChevronIcon className="rotate-180" />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  )
}
