export const getEmail = (profileData) => {
  const paragraph = document.createElement("p");
  if (profileData.email) {
    const paragraphTextNode = document.createTextNode(profileData.email);
    paragraph.appendChild(paragraphTextNode);
  }

  return paragraph;
};
