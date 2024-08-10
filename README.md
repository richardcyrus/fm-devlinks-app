# Frontend Mentor - Link-sharing app solution

This is a solution to the [Link-sharing app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/linksharing-app-Fbt7yweGsT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Expected behaviour](#expected-behaviour)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create, read, update, delete links and see previews in the mobile mockup
- Receive validations if the links form is submitted without a URL or with the wrong URL pattern for the platform
- Drag and drop links to reorder them
- Add profile details like profile picture, first name, last name, and email
- Receive validations if the profile details form is saved with no first or last name
- Preview their devlinks profile and copy the link to their clipboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Save details to a database (build the project as a full-stack app)
- **Bonus**: Create an account and log in (add user authentication to the full-stack app)

### Expected behaviour

- Links
  - Clicking "Add new link" will add a new repeater where the user can select the platform to add a link for and add the URL.
  - Adding a new link should immediately show the platform's link in the mobile mockup illustration even before the form is saved.
  - When the user clicks "Save", the form should validate for the presence of a URL and ensure the URL pattern is correct for the platform (e.g. "https://www.frontendmentor.io/profile/:username" for the Frontend Mentor link).
  - The user should be able to drag and drop by clicking and holding the two-line hamburger icon in the top left of each link repeater.
  - The mobile mockup illustration isn't shown on tablet and mobile layouts. The user would need to click through to the preview page to see their profile.
- Profile Details
  - First name and last name are the only required fields. If no profile picture or email address are present, remove the necessary parts of the mobile mockup or use the person's initials inside the circle where the profile picture would be.
- Preview
  - Clicking "Share Link" should copy the current URL to the user's clipboard and show the relevant toast message shown in the design.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Remix](https://remix.run/) - React full stack framework
- [Radix-UI Primitives](https://www.radix-ui.com/primitives) - Core building blocks for your design system

### What I learned

### Continued development

### Useful resources

- [How to Favicon in 2023: Six files that fit most needs](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) - This helped me with the generation of a Favicon using the logo provided with the project source.
- [CSS Button Styling Guide](https://moderncss.dev/css-button-styling-guide/) - Used to define the base styling for the <Button> and <LinkButton> components.
- [The many methods for using SVG icons](https://chenhuijing.com/blog/the-many-methods-for-using-svg-icons/#👟) - Used for adding the icon variants for navigation buttons.
- [Hide text using css](https://stackoverflow.com/questions/471510/hide-text-using-css) - Used for the icon only variant of the navigation elements.
- [Forwarding React Refs with TypeScript](https://www.carlrippon.com/react-forwardref-typescript/)

## Author

- Website - [https://www.richardcyrus.com](https://www.richardcyrus.com)
- Frontend Mentor - [@richardcyrus](https://www.frontendmentor.io/profile/richardcyrus)

## Acknowledgments
