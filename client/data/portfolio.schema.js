export const schema = {
  title: "portfolio data",
  description: "infomation to use in section About",
  type: "object",

  properties: {
    greeting: {
      type: "string",
      description: "a friendly greeting for the user",
    },

    aboutP: {
      type: "string",
      description: "text for <p> in section about",
    },

    skills: {
      type: "array",
      description: "info for section Skills",
      properties: {
        header: {
          type: "string",
          description: "text to render in the header of subsection",
        },
        text: {
          type: "string",
          description: "text to render in the <p> of subsection",
        },
      },
    },

    sections: {
      type: "array",
      description: "names of sections",
      properties: {
        header: {
          type: "string",
          description: "text to render in the header of section",
        },
        link: {
          type: "string",
          description: "link to the section",
        },
      },
    },
  },
};
