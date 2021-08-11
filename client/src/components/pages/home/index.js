import { getApiData } from "../../../api-calls/get-data.js";
import { createAvatar } from "./create-avatar.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.innerHTML = "home: ";

  getApiData("https://api.github.com/users/IrinaSing").then((data) => {
    createAvatar(data);
  });
  container.appendChild(createAvatar());

  return container;
};
