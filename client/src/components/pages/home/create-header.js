import { state } from "../../../init/state.js";

export const createHeader = (section) => {
  const heading = document.createElement("h2");
  const headingTextNode = document.createTextNode(
    state.sections[section].header
  );
  heading.id = state.sections[section].link;
  heading.appendChild(headingTextNode);
  return heading;
};
