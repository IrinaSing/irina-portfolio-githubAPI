import { state } from "../../../init/state.js";

export const aboutParagraph = (profileData) => {
  const getLocation = profileData.location;

  const div = document.createElement("div");
  div.classList = "col-sm pt-5";

  const heading = document.createElement("h2");
  const headingTextNode = document.createTextNode(state.sections[0].header);
  heading.appendChild(headingTextNode);

  // eslint-disable-next-line spellcheck/spell-checker
  const aboutP = `My name is Irina. I’m a junior web developer located in ${getLocation}. I am passionate about creating maximally user-friendly websites and applications. My goal is to make products that help companies and users in reaching their goals.`;

  const paragraph = document.createElement("p");
  const paragraphTextNode = document.createTextNode(aboutP);
  paragraph.appendChild(paragraphTextNode);

  div.appendChild(heading);
  div.appendChild(paragraph);

  return div;
};
