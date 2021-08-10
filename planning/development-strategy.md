<!--

  These will be the main types of tasks in the quiz project:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`

  Some general changes you will need to make:
  - client/data/quiz.js (to add questions)
  - client/config.js (to configure your repo name for deployment)

  For each user story you may need to write code in:
  - client/src/components
  - client/src/handlers
  - client/src/logic
  - client/styles
  - client/public

  everything else should work already!

-->

# Data

Add following data object in client/data/portfolio.js

1. greetings
2. about
3. skills

# Body (html tag)

## CSS

- background: #FFFFFF;
- overflow-y: scroll;

# Navbar

`type: components`

## HTML

- <_nav_> with class="navbar navbar-expand-lg navbar-light bg-light fixed-top".
- Logo (name) with class="navbar-brand".
- Div inside nav
- Links to sections: about, skills, projects, contacts: <_a_> inside <_li_> inside <_u_>.

### CSS

- width: 71px;
- height: 28px;
- left: 735px;
- top: 24px;
- font-style: normal;
- font-weight: normal;
- font-size: 24px;
- line-height: 28px;
- color: #000000;

### Logo CSS

- width: 179px;
- height: 41px;
- left: 67px;
- top: 22px;
- font-style: normal;
- font-weight: bold;
- font-size: 36px;
- line-height: 41px;
- display: flex;
- align-items: center;
- color: #000000;

# About section

## Avatar

`type: components`

- Create file avatar.js in client/src/components.
- Write async function that creates:
- div with id="avatar-div".
- DOM element with tag <_img_>.
- scr - fetch link from API.
- style.width = 350px.
- alt = "user avatar".

## About component

`type: components`

- Create file about.js in client/src/components.
- Write async function that creates:
- div with id="about-div"
- DOM element with tag <_h1_> and fetch Name from API.
- DOM element with tag <_p_> and import about text from data file.
- DOM element <_p_> and fetch location from API.
- DOM element <_p_> and fetch email from API.

# Skills section

- <_h2_> Skills - header for section

# Skill component

`type: components`

- Div, H3 and p DOM elements.
- Render content from data.

# Projects section

- H1 Projects
- H2 Individual projects, Team projects

## Github profile component

`type: components`

- H3 My Profile
- Github logo
- <_p_> for info:
- Contributes, commits, Prs - numbers fetched from API.

## Introduction component

`type: components`

- H3 Introduction.
- <_p_> text of introduction (from data).

## Project card component

`type: components`

- H3 Name of the project fetched from API.
- <_p_> description
- labels eg. "html", "UI/UX" fetched from API/repo.
- <_button_> buttons to repo - "code" and to demo - "demo".

# Contacts section

## Contact form

- Bootstrap form.
- Use formspree to make it receive emails.
