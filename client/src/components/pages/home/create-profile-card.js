export const profileCard = (profileData) => {
  const div = document.createElement("div");
  div.classList = "row g-0 bg-light position-relative shadow-sm";

  const logoDiv = document.createElement("div");
  logoDiv.classList =
    "d-flex flex-column col-md-4 mb-md-0 p-md-4 align-items-center";
  div.appendChild(logoDiv);

  const octoLogo = document.createElement("img");
  octoLogo.classList = "flex-shrink-0 me-3 ";
  octoLogo.id = "octocat";
  octoLogo.src = "client/public/octicon.svg";
  octoLogo.alt = "Octocat logo";
  logoDiv.appendChild(octoLogo);

  const gitLogo = document.createElement("img");
  gitLogo.classList = "flex-shrink-0 me-3 m-2";
  gitLogo.id = "github";
  gitLogo.src = "client/public/github.svg";
  gitLogo.alt = "Octocat logo";
  logoDiv.appendChild(gitLogo);

  const textDiv = document.createElement("div");
  textDiv.classList = "col-md-8 p-4 ps-md-0 text-sm-left";

  const cardHeader = document.createElement("h5");
  cardHeader.className = "mt-0";
  cardHeader.innerHTML = "My profile on GitHub";
  textDiv.appendChild(cardHeader);

  const cardP = document.createElement("p");
  cardP.innerHTML = "Statistics, activities, useful repositories.";
  textDiv.appendChild(cardP);

  const cardA = document.createElement("a");
  cardA.className = "btn btn-primary";
  cardA.innerHTML = "Go to profile";
  cardA.href = profileData.html_url;
  cardA.target = "_blank";
  textDiv.appendChild(cardA);

  div.appendChild(logoDiv);
  div.appendChild(textDiv);
  return div;
};
