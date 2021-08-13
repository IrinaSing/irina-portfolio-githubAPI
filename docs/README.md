<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- api-calls
  - [get-data.js](#clientsrcapi-callsget-datajs)
- components
  - layout
    - [footer.js](#clientsrccomponentslayoutfooterjs)
    - [navbar.js](#clientsrccomponentslayoutnavbarjs)
    - [page.js](#clientsrccomponentslayoutpagejs)
  - pages
    - home
      - [about-paragraph.js](#clientsrccomponentspageshomeabout-paragraphjs)
      - [create-avatar.js](#clientsrccomponentspageshomecreate-avatarjs)
      - [create-header.js](#clientsrccomponentspageshomecreate-headerjs)
      - [create-profile-card.js](#clientsrccomponentspageshomecreate-profile-cardjs)
      - [get-email.js](#clientsrccomponentspageshomeget-emailjs)
      - [get-location.js](#clientsrccomponentspageshomeget-locationjs)
      - [index.js](#clientsrccomponentspageshomeindexjs)
    - questions
      - [index.js](#clientsrccomponentspagesquestionsindexjs)
    - quiz
      - [index.js](#clientsrccomponentspagesquizindexjs)
- handlers
  - [append.js](#clientsrchandlersappendjs)
- init
  - [index.js](#clientsrcinitindexjs)
  - [router.js](#clientsrcinitrouterjs)
  - [state.js](#clientsrcinitstatejs)
- logic
- [routes.js](#clientsrcroutesjs)

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /api-calls

<details><summary><a href="../../client/src/api-calls/get-data.js" id="clientsrcapi-callsget-datajs">../client/src/api-calls/get-data.js</a></summary>

</details>

---

# /components

## /layout

<details><summary><a href="../../client/src/components/layout/footer.js" id="clientsrccomponentslayoutfooterjs">../client/src/components/layout/footer.js</a></summary>

<a name="footer"></a>

## footer ⇒ <code>HTMLDivElement</code>

The shared footer.

**Returns**: <code>HTMLDivElement</code> - A rendered footer element.

</details>

<details><summary><a href="../../client/src/components/layout/navbar.js" id="clientsrccomponentslayoutnavbarjs">../client/src/components/layout/navbar.js</a></summary>

<a name="navbar"></a>

## navbar ⇒ <code>HTMLDivElement</code>

The shared navbar.

**Returns**: <code>HTMLDivElement</code> - A rendered nav bar element.

</details>

<details><summary><a href="../../client/src/components/layout/page.js" id="clientsrccomponentslayoutpagejs">../client/src/components/layout/page.js</a></summary>

<a name="page"></a>

## page ⇒ <code>HTMLDivElement</code>

The page layout component.

**Returns**: <code>HTMLDivElement</code> - A rendered page element.  
**Throws**:

- <code>TypeError</code> When the bodyComponent is not a function or DOM element.

| Param         | Type                                              | Description                           |
| ------------- | ------------------------------------------------- | ------------------------------------- |
| bodyComponent | <code>function</code> \| <code>HTMLElement</code> | The body for the newly rendered page. |

</details>

---

## /pages

### /home

<details><summary><a href="../../client/src/components/pages/home/about-paragraph.js" id="clientsrccomponentspageshomeabout-paragraphjs">../client/src/components/pages/home/about-paragraph.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/create-avatar.js" id="clientsrccomponentspageshomecreate-avatarjs">../client/src/components/pages/home/create-avatar.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/create-header.js" id="clientsrccomponentspageshomecreate-headerjs">../client/src/components/pages/home/create-header.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/create-profile-card.js" id="clientsrccomponentspageshomecreate-profile-cardjs">../client/src/components/pages/home/create-profile-card.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/get-email.js" id="clientsrccomponentspageshomeget-emailjs">../client/src/components/pages/home/get-email.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/get-location.js" id="clientsrccomponentspageshomeget-locationjs">../client/src/components/pages/home/get-location.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/index.js" id="clientsrccomponentspageshomeindexjs">../client/src/components/pages/home/index.js</a></summary>

<a name="home"></a>

## home ⇒ <code>HTMLDivElement</code>

The home page.

**Returns**: <code>HTMLDivElement</code> - A rendered home page.

</details>

---

### /questions

<details><summary><a href="../../client/src/components/pages/questions/index.js" id="clientsrccomponentspagesquestionsindexjs">../client/src/components/pages/questions/index.js</a></summary>

<a name="questions"></a>

## questions ⇒ <code>HTMLDivElement</code>

The questions page.

**Returns**: <code>HTMLDivElement</code> - A rendered questions page.

</details>

---

### /quiz

<details><summary><a href="../../client/src/components/pages/quiz/index.js" id="clientsrccomponentspagesquizindexjs">../client/src/components/pages/quiz/index.js</a></summary>

<a name="quiz"></a>

## quiz ⇒ <code>HTMLDivElement</code>

The quiz page.

**Returns**: <code>HTMLDivElement</code> - A rendered quiz page.

</details>

---

---

---

# /handlers

<details><summary><a href="../../client/src/handlers/append.js" id="clientsrchandlersappendjs">../client/src/handlers/append.js</a></summary>

</details>

---

# /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/router.js" id="clientsrcinitrouterjs">../client/src/init/router.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/state.js" id="clientsrcinitstatejs">../client/src/init/state.js</a></summary>

</details>

---

# /logic

---

<details><summary><a href="../../client/src/routes.js" id="clientsrcroutesjs">../client/src/routes.js</a></summary>

<a name="module_routes"></a>

## routes

Defines the route URLs, names and callbacks.

</details>

<!-- END DOCS -->
