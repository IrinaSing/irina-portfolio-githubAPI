export const getlocation = (profileData) => {
  const paragraph = document.createElement("p");
  if (profileData.location) {
    const paragraphTextNode = document.createTextNode(profileData.location);
    paragraph.appendChild(paragraphTextNode);
  }

  return paragraph;
};
