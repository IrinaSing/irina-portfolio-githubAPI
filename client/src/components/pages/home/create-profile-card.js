export const profileCard = (profileData) => {
  const div = document.createElement("div");
  div.classList = "row g-0 bg-light position-relative shadow-sm";

  const logoDiv = document.createElement("div");
  logoDiv.classList =
    "d-flex flex-column col-md-2 mb-md-0 p-md-4 align-items-center";
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
  textDiv.classList = "col-md-6 p-4 ps-md-0 text-sm-left";

  const cardHeader = document.createElement("h5");
  cardHeader.className = "mt-0";
  cardHeader.innerHTML = "My profile on GitHub";
  textDiv.appendChild(cardHeader);

  const cardP = document.createElement("p");
  cardP.innerHTML = "Statistics, activities, useful repositories.";

  const stats = document.createElement("p");
  stats.classList = "pale mb-md-3";
  stats.innerHTML = `${profileData.login}: ${profileData.public_repos} public repos.`;

  textDiv.appendChild(cardP);
  textDiv.appendChild(stats);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList = "col-md-4 p-4 ps-md-0 text-sm-left my-auto";

  const cardA = document.createElement("a");
  cardA.className = "btn btn-primary btn-md";
  cardA.innerHTML = "Go to my profile";
  cardA.href = profileData.html_url;
  cardA.target = "_blank";
  buttonDiv.appendChild(cardA);

  div.appendChild(logoDiv);
  div.appendChild(textDiv);
  div.appendChild(buttonDiv);

  return div;
};

/*
  const introDiv = document.createElement("div");
  introDiv.classList = "col-md-5 p-4 ps-md-0 text-sm-left";

 
  const introP = document.createElement("p");
  introP.innerHTML = `Check out some of my projects below. The cards contain a little overview.`;

  introDiv.appendChild(introP);
  div.appendChild(introDiv);
*/
// eslint-disable-next-line spellcheck/spell-checker
/*
  const userName = document.createElement("li");
  userName.className = "list-group-item";
  userName.innerHTML = `Username: ${profileData.login}`;
  stats.appendChild(userName);

  const repos = document.createElement("li");
  repos.className = "list-group-item";
  repos.innerHTML = `Public repositories: ${profileData.public_repos}`;  
  stats.appendChild(repos);
  */
