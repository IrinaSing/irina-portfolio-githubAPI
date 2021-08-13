import { getApiData } from "../../../api-calls/get-data.js";
import { createAvatar } from "./create-avatar.js";
import { aboutParagraph } from "./about-paragraph.js";
import { append } from "../../../handlers/append.js";
import { getEmail } from "./get-email.js";
import { createHeader } from "./create-header.js";
import { profileCard } from "./create-profile-card.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const container = document.createElement("div");
  container.className = "body-div";

  // section about
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "container";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList = "row p-5";
  aboutDiv.id = "about-div";

  const apiAbout = async () => {
    const response = await getApiData("https://api.github.com/users/IrinaSing");

    const avatar = createAvatar(response);
    const aboutText = aboutParagraph(response);
    const email = getEmail(response);
    const gitCard = profileCard(response);

    await Promise.all([avatar, aboutText, email, gitCard]);

    append(aboutDiv, avatar);
    append(aboutDiv, aboutText);
    append(aboutDiv, email);
  };
  apiAbout();

  append(aboutContainer, aboutDiv);
  append(aboutSection, aboutContainer);
  append(container, aboutSection);

  // section Projects
  const projectsSection = document.createElement("section");
  projectsSection.id = "projects";

  const projectsContainer = document.createElement("div");
  projectsContainer.classList = "container p-5 text-center";

  const projectsHeader = createHeader(2);
  projectsContainer.appendChild(projectsHeader);

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "container-sm";

  const cardsDiv = document.createElement("div");
  cardsDiv.classList = "row text-center justify-content-md-center";

  const apiProjects = async () => {
    const response = await getApiData("https://api.github.com/users/IrinaSing");

    const gitCard = profileCard(response);

    await Promise.all([gitCard]);

    append(cardsDiv, gitCard);
  };
  apiProjects();

  append(cardsContainer, cardsDiv);
  append(projectsContainer, projectsHeader);
  append(projectsContainer, cardsContainer);
  append(projectsSection, projectsContainer);
  append(container, projectsSection);

  return container;
};
