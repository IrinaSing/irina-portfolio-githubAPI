import { state } from "../../../init/state.js";

export const aboutParagraph = () => {
  const div = document.createElement("div");
  div.classList = "col-sm pt-5";

  const heading = document.createElement("h2");
  const headingTextNode = document.createTextNode(state.sections[0].header);
  heading.appendChild(headingTextNode);

  const paragraph = document.createElement("p");
  const paragraphTextNode = document.createTextNode(state.aboutP);
  paragraph.appendChild(paragraphTextNode);

  div.appendChild(heading);
  div.appendChild(paragraph);

  return div;
};
