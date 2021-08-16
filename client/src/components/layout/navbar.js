/* eslint-disable spellcheck/spell-checker */

/**
 * The shared navbar.
 *
 * @returns {HTMLDivElement} A rendered nav bar element.
 */

export const navbar = (sectionLinks) => {
  // const sectionLinks = state.sections; // array of objects
  const container = document.createElement("nav");
  container.classList =
    "navbar navbar-expand-lg navbar-light bg-light fixed-top";

  // to regulate layout of elements
  const divFluid = document.createElement("div");
  divFluid.className = "container-fluid";
  container.appendChild(divFluid);

  // write "logo"
  const persona = document.createElement("a");
  persona.className = "navbar-brand";
  persona.href = "#";
  persona.innerHTML = "Irina Singh";
  persona.height = 120;
  divFluid.appendChild(persona);

  // buttom for burger-menu
  const button = document.createElement("button");
  button.className = "navbar-toggler";
  button.type = "button";
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", "#navbarNav");
  button.setAttribute("aria-controls", "navbarNav");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Toggle navigation");
  const icon = document.createElement("span");
  icon.className = "navbar-toggler-icon";
  button.appendChild(icon);
  divFluid.appendChild(button);

  // collapse normal menu
  const collapseDiv = document.createElement("div");
  collapseDiv.classList = "collapse navbar-collapse justify-content-end";
  collapseDiv.id = "navbarNav";

  const ulOfLinks = document.createElement("ul");
  ulOfLinks.className = "navbar-nav";

  for (const link of sectionLinks) {
    const li = document.createElement("li");
    li.className = "nav-item";

    const anchor = document.createElement("a");
    anchor.innerHTML = link.header;
    anchor.href = `#${link.id}`;
    anchor.className = "nav-link";
    li.appendChild(anchor);
    ulOfLinks.appendChild(li);
  }

  collapseDiv.appendChild(ulOfLinks);

  divFluid.appendChild(collapseDiv);

  return container;
};
