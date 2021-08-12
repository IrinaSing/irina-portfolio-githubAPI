import { getApiData } from "../../../api-calls/get-data.js";
import { createAvatar } from "./create-avatar.js";
import { aboutParagraph } from "./about-paragraph.js";
import { append } from "../../../handlers/append.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const container = document.createElement("div");
  container.className = "body-div";

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "container";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList = "row p-5";
  aboutDiv.id = "about-div";

  const aboutText = aboutParagraph();

  const apiElements = async () => {
    const response = await getApiData("https://api.github.com/users/IrinaSing");
    const avatar = createAvatar(response);
    append(aboutDiv, avatar);
    append(aboutDiv, aboutText);
  };
  apiElements();

  append(aboutContainer, aboutDiv);
  append(container, aboutContainer);
  return container;
};
