import { state } from "../../../init/state.js";

export const createHeader = (section) => {
  const heading = document.createElement("h2");
  const headingTextNode = document.createTextNode(
    state.sections[section].header
  );
  heading.appendChild(headingTextNode);
  return heading;
};
