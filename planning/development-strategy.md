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

# Navbar (component)

## HTML

- navbar.js in client/src/components.
- <_nav_> with class="navbar navbar-expand-lg navbar-light bg-light fixed-top".
- Logo (name) with class="navbar-brand".
- Div inside nav
- Links to sections: about, skills, projects, contacts: <_a_> inside <_li_> inside <_u_>.



### Navbar CSS

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
