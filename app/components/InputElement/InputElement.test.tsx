import { render, screen } from '@testing-library/react'

import { InputElement } from '~/components/InputElement/index'

describe('<InputElement /> Component', () => {
  it('renders an input element with an email icon', () => {
    render(
      <InputElement
        autoComplete="email"
        id="email-address"
        inputMode="email"
        intent="email"
        name="email-address"
        placeholder="e.g. alex@email.com"
        required
        type="email"
      />
    )

    const inputEl = screen.getByPlaceholderText('e.g. alex@email.com')

    expect(inputEl).toHaveClass('email')
    expect(window.getComputedStyle(inputEl).backgroundImage).toBe(
      'url("/app/assets/images/icon-email.svg")'
    )
  })

  it('renders an input element with an link icon', () => {
    render(
      <InputElement
        autoComplete="url"
        id="link"
        inputMode="url"
        intent="link"
        name="link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        type="url"
      />
    )

    const inputEl = screen.getByPlaceholderText(
      'e.g. https://www.github.com/johnappleseed'
    )

    expect(inputEl).toHaveClass('link')
    expect(window.getComputedStyle(inputEl).backgroundImage).toBe(
      'url("/app/assets/images/icon-link.svg")'
    )
  })

  it('renders an input element with an password icon', () => {
    render(
      <InputElement
        autoComplete="current-password"
        id="password"
        intent="password"
        name="password"
        placeholder="Enter your password"
        required
        type="password"
      />
    )

    const inputEl = screen.getByPlaceholderText('Enter your password')

    expect(inputEl).toHaveClass('password')
    expect(window.getComputedStyle(inputEl).backgroundImage).toBe(
      'url("/app/assets/images/icon-password.svg")'
    )
  })

  it('renders an input element without an icon', () => {
    render(
      <InputElement
        autoComplete="given-name"
        className="invalid"
        id="profile-firstname"
        intent="default"
        name="profile-firstname"
        placeholder="e.g. John"
        required
        type="text"
      />
    )

    const inputEl = screen.getByPlaceholderText('e.g. John')

    expect(inputEl).toHaveClass('default')
    expect(window.getComputedStyle(inputEl).backgroundImage).toBe('')
  })
})
