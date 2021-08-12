/* eslint-disable spellcheck/spell-checker */

export const createAvatar = (profileData) => {
  console.log("create avatar", profileData);
  const container = document.createElement("div");
  if (profileData.avatar_url && profileData.name) {
    const heading = document.createElement("h1");
    const headingTextNode = document.createTextNode(
      `Github profile: ${profileData.name}`
    );
    heading.appendChild(headingTextNode);
    container.appendChild(heading);

    const image = document.createElement("img");
    image.src = profileData.avatar_url;
    image.width = 100;
    container.appendChild(image);
    console.log(heading, image);
  }

  console.log("container avatar", container, typeof container);
  return container;
};

/*
import { state } from "../../../init/state.js";

export const createAvatar = () => {
  const avatarFromData = state.fetchedUserData.avatar_url;
  const nameFromData = state.fetchedUserData.userName;
  console.log("create avatar");
  const container = document.createElement("div");
  container.id = "avatar-div";

  if (avatarFromData === null && nameFromData === null) {
    const heading = document.createElement("h1");
    const headingTextNode = document.createTextNode(
      `Github profile: ${nameFromData}`
    );
    heading.appendChild(headingTextNode);
    container.appendChild(heading);

    const image = document.createElement("img");
    image.src = nameFromData;
    image.width = 100;
    container.appendChild(image);
    console.log(heading, image);
  }

  console.log("container avatar", container, typeof container);
  return container;
};
*/
