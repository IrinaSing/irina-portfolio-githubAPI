import { getApiData } from "../../../api-calls/get-data.js";
import { createAvatar } from "./create-avatar.js";
import { aboutParagraph } from "./about-paragraph.js";
import { append } from "../../../handlers/append.js";
import { getEmail } from "./get-email.js";
import { createHeader } from "./create-header.js";
import { profileCard } from "./create-profile-card.js";
import { projectCard } from "./create-project-card.js";
import { errorParagraph } from "./error-message.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const container = document.createElement("div");
  container.className = "body-div";

  // section about elements
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "container";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList = "row p-5";
  aboutDiv.id = "about-div";

  // section Projects elements
  const projectsSection = document.createElement("section");
  projectsSection.id = "projects";

  const projectsContainer = document.createElement("div");
  projectsContainer.classList = "container text-center p-5";

  const projectsHeader = createHeader(2);
  projectsContainer.appendChild(projectsHeader);

  const gitProfileCard = document.createElement("div");
  gitProfileCard.className = "container-sm p-3 align-items-center";

  // get info about user from api
  const apiUser = async () => {
    try {
      const response = await getApiData(
        "https://api.github.com/users/IrinaSing"
      );

      const avatar = createAvatar(response);
      const aboutText = aboutParagraph(response);
      const email = getEmail(response);
      const gitCard = profileCard(response);

      await Promise.allSettled([avatar, aboutText, email, gitCard]);

      append(aboutDiv, avatar);
      append(aboutDiv, aboutText);
      append(aboutDiv, email);
      append(gitProfileCard, gitCard);
    } catch (err) {
      const message = `Oops, information is not available now :(`;
      const errorMessage = errorParagraph(message, err);
      append(gitProfileCard, errorMessage);
    }
  };
  apiUser();

  // append about
  append(aboutContainer, aboutDiv);
  append(aboutSection, aboutContainer);
  append(container, aboutSection);

  // append projects
  append(projectsContainer, projectsHeader);
  append(projectsContainer, gitProfileCard);

  // projects elements

  // container for all projects
  const gitProjects = document.createElement("div");
  gitProjects.className = "container p-3";

  const apiRepos = async () => {
    try {
      const response = await getApiData(
        "https://api.github.com/users/IrinaSing/repos?&per_page=100"
      );
      const projects = projectCard(response);
      append(gitProjects, projects);
    } catch (err) {
      const message = `Oops, projects are not available now :(`;
      const errorMessage = errorParagraph(message, err);
      append(gitProjects, errorMessage);
    }
  };
  apiRepos();

  append(projectsContainer, gitProjects);

  append(projectsSection, projectsContainer);
  append(container, projectsSection);

  return container;
};
