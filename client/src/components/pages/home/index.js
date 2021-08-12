import { getApiData } from "../../../api-calls/get-data.js";
import { updateData } from "../../../handlers/upd-data.js";
import { createAvatar } from "./create-avatar.js";
import { append } from "../../../handlers/append.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const container = document.createElement("div");
  container.className = "body-div";
  container.style.backgroundColor = "red";

  const aboutDiv = document.createElement("div");
  aboutDiv.className = "about-div";

  const p = document.createElement("p");
  p.innerHTML = "hgcccccccccchcccccccccccccccccccc";
  aboutDiv.appendChild(p);

  const eee = async () => {
    const ttt = await getApiData("https://api.github.com/users/IrinaSing");
    const avatar = createAvatar(ttt);
    aboutDiv.appendChild(avatar);
  };
  eee();

  /*
  getApiData("https://api.github.com/users/IrinaSing")
    .then((data) => {
      console.log(data, "data in upd data!"); // logs json obj
      updateData(data);
    })
    .then((data) => {
      console.log(data, "data in init!"); // undefined
    });
*/
  /*
  getApiData("https://api.github.com/users/IrinaSing")
    .then((data) => {
      console.log(data, "data in upd data!"); // logs json obj
      updateData(data);
    })
    .then((data) => {
      console.log(data, "data in init!"); // undefined
    });
*/
  container.appendChild(aboutDiv);
  return container;
};
