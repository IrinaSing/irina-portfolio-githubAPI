export const projectCard = (repoData) => {
  // div for all the cards
  const div = document.createElement("div");
  div.classList = "row g-0 position-relative";

  if (Array.isArray(repoData)) {
    repoData.forEach((repoItem) => {
      if (repoItem.has_pages === true) {
        // div for each card
        const cardDiv = document.createElement("div");
        cardDiv.classList = "col-sm-6 p-2";

        // card
        const card = document.createElement("div");
        card.classList = "card h-100 shadow-sm";

        // card body
        const cardBody = document.createElement("div");
        cardBody.classList = "card-body d-flex flex-column";

        const repoName = document.createElement("h4");
        repoName.className = "card-title";
        repoName.innerHTML = repoItem.name;

        const description = document.createElement("p");
        description.className = "card-text";
        description.innerHTML = repoItem.description;

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "p-2 mt-auto";

        const sourseLink = document.createElement("a");
        sourseLink.classList = "btn btn-primary float-left";
        sourseLink.href = repoItem.html_url;
        sourseLink.innerHTML = "code";
        sourseLink.target = "_blank";

        const demoLink = document.createElement("a");
        demoLink.classList = "btn btn-primary float-right";
        demoLink.href = repoItem.homepage;
        demoLink.innerHTML = "demo";
        demoLink.target = "_blank";

        buttonDiv.appendChild(sourseLink);
        buttonDiv.appendChild(demoLink);
        cardBody.appendChild(repoName);
        cardBody.appendChild(description);
        cardBody.appendChild(buttonDiv);

        card.appendChild(cardBody);
        cardDiv.appendChild(card);
        div.appendChild(cardDiv);
      }
    });
  }
  return div;
};
