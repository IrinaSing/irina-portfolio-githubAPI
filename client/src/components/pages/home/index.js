import { getApiData } from "../../../api-calls/get-data.js";
import { createAvatar } from "./create-avatar.js";
import { aboutParagraph } from "./about-paragraph.js";
import { append } from "../../../handlers/append.js";
import { getEmail } from "./get-email.js";

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

  const apiElements = async () => {
    const response = await getApiData("https://api.github.com/users/IrinaSing");

    const avatar = createAvatar(response);
    const aboutText = aboutParagraph(response);
    const email = getEmail(response);

    await Promise.all([avatar, aboutText, email]);

    append(aboutDiv, avatar);
    append(aboutDiv, aboutText);
    append(aboutDiv, email);
  };
  apiElements();

  append(aboutContainer, aboutDiv);
  append(aboutSection, aboutContainer);
  append(container, aboutSection);

  return container;
};
