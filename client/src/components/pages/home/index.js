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

  const gitProfileCard = document.createElement("div");
  gitProfileCard.className = "container-sm";

  const apiProjects = async () => {
    const response = await getApiData("https://api.github.com/users/IrinaSing");

    const gitCard = profileCard(response);

    await Promise.all([gitCard]);

    append(gitProfileCard, gitCard);
  };
  apiProjects();

  append(projectsContainer, projectsHeader);
  append(projectsContainer, gitProfileCard);
  append(projectsSection, projectsContainer);
  append(container, projectsSection);

  return container;
};
