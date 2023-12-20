import { createRemixStub } from '@remix-run/testing'
import { render, screen } from '@testing-library/react'

import { Button, LinkButton, NavButton } from '~/components/Button/index'

describe('<Button /> Component', () => {
  it('renders a button and applies classes of "primary, medium" when intent="primary" and size="medium"', () => {
    render(
      <Button intent="primary" size="medium" type="button">
        Share Link
      </Button>
    )

    const button = screen.getByRole('button', { name: /share link/i })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('primary')
    expect(button).toHaveClass('medium')
  })

  it('renders a button and applies classes of "primary, full" when intent="primary" and size="full"', () => {
    render(
      <Button intent="primary" size="full" type="submit">
        Save
      </Button>
    )

    const button = screen.getByRole('button', { name: /save/i })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveClass('primary')
    expect(button).toHaveClass('full')
  })
})

describe('<LinkButton /> Component', () => {
  it('renders an anchor tag and applies classes of "secondary, medium" when intent="secondary" and size="medium"', () => {
    function ComponentToTest() {
      return (
        <LinkButton intent="secondary" size="medium" to="/edit">
          Back to Editor
        </LinkButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Back to Editor/i })
    expect(button).toHaveClass('secondary')
    expect(button).toHaveClass('medium')
  })
})

describe('<NavButton /> Component', () => {
  it('renders an anchor tag and applies classes of "default, links, medium" when intent="default", kind="links", and size="medium"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="default" kind="links" size="medium" to="/links">
          Links
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Links/i })
    expect(button).toHaveClass('default')
    expect(button).toHaveClass('links')
    expect(button).toHaveClass('medium')
  })

  it('renders an anchor tag and applies classes of "default, profile, medium" when intent="default", kind="profile", and size="medium"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="default" kind="profile" size="medium" to="/profile">
          Profile Details
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Profile Details/i })
    expect(button).toHaveClass('default')
    expect(button).toHaveClass('profile')
    expect(button).toHaveClass('medium')
  })

  it('renders an anchor tag and applies classes of "primary, medium" when intent="primary" and size="medium"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="primary" size="medium" to="/profile">
          Back to Editor
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Back to Editor/i })
    expect(button).toHaveClass('primary')
    expect(button).toHaveClass('medium')
  })

  it('renders an anchor tag and applies classes of "secondary, medium" when intent="secondary" and size="medium"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="secondary" size="medium" to="/share">
          Share Link
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /share link/i })
    expect(button).toHaveClass('secondary')
    expect(button).toHaveClass('medium')
  })

  it('renders an anchor tag and applies classes of "secondary, preview, icon-only" when intent="secondary", kind="preview", and size="icon"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="secondary" kind="preview" size="icon" to="/preview">
          Preview
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Preview/i })
    expect(button).toHaveClass('secondary')
    expect(button).toHaveClass('preview')
    expect(button).toHaveClass('icon-only')
  })

  it('renders an anchor tag and applies classes of "default, links, icon-only" when intent="default", kind="links", and size="icon"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="default" kind="links" size="icon" to="/links">
          Links
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Links/i })
    expect(button).toHaveClass('default')
    expect(button).toHaveClass('links')
    expect(button).toHaveClass('icon-only')
  })

  it('renders an anchor tag and applies classes of "default, profile, icon-only" when intent="default", kind="profile", and size="icon"', () => {
    function ComponentToTest() {
      return (
        <NavButton intent="default" kind="profile" size="icon" to="/profile">
          Profile Details
        </NavButton>
      )
    }

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: ComponentToTest,
      },
    ])

    render(<RemixStub />)

    const button = screen.getByRole('link', { name: /Profile Details/i })
    expect(button).toHaveClass('default')
    expect(button).toHaveClass('profile')
    expect(button).toHaveClass('icon-only')
  })
})
