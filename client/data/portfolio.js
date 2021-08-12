export const data = {
  greeting: "Hello, welcome to my page",
  sections: [
    { header: "About", link: "#About" },
    { header: "Skills", link: "#Skills" },
    { header: "Projects", link: "#Projects" },
    { header: "Contacts", link: "#Contacts" },
  ],
  skills: [
    {
      header: "Basics",
      text: "HTML, CSS, UI/UX principles, Agile development, debugging, testing.",
    },
    {
      header: "Background",
      text: "I have background in printing and e-learn design, and I like to use my knowledge when it comes to web development.",
    },
    {
      header: "Tools",
      tools: [
        {
          name: "Adobe Photoshop",
          logo: "",
        },
        {
          name: "VSCode",
          logo: "",
        },
      ],
    },
  ],
  fetchedUserData: {
    avatar_url: "",
    userName: "",
    location: "",
    email: "",
  },
};
