export const profileCard = (profileData) => {
  const div = document.createElement("div");
  div.classList = "col-sm-3 p-3";

  const a = document.createElement("a");
  a.href = profileData.html_url;
  a.target = "_blank";

  const gitlogo = document.createElement("img");
  gitlogo.classList = "logo m-3";
  gitlogo.src = "client/public/octicon.svg";
  gitlogo.alt = "Octocat logo";

  a.appendChild(gitlogo);
  div.appendChild(a);

  return div;
};
