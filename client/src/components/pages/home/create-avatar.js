export const createAvatar = (profileData) => {
  const div = document.createElement("div");
  div.className = "col-sm";
  div.id = "avatar-div";

  if (profileData.avatar_url) {
    const image = document.createElement("img");
    image.src = profileData.avatar_url;
    image.className = "shadow-sm photo";
    image.height = 300;
    div.appendChild(image);
  }

  return div;
};
