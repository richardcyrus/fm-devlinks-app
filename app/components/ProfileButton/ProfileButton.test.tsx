import { createRemixStub } from '@remix-run/testing'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import { ProfileButton } from '~/components/ProfileButton/index'

describe('<ProfileButton /> Component', () => {
  it('renders a button and copies profileUrl to clipboard when clicked', async () => {
    /**
     * Component for testing ProfileButton component
     */
    function ComponentToTest() {
      // Render ProfileButton with specific props
      return <ProfileButton platform="github" profileUrl="https://github.com" />
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const clipboardMock = vi.spyOn(navigator.clipboard, 'writeText')

    const button = screen.getByRole('button', { name: /GitHub/i })
    await userEvent.click(button)
    const clipboardText = await navigator.clipboard.readText()

    expect(clipboardMock).toHaveBeenCalledWith('https://github.com')
    expect(clipboardText).toBe('https://github.com')
    expect(button).toHaveAttribute('data-clipboard-text', 'https://github.com')
    expect(button).toHaveClass('github')
  })
})
