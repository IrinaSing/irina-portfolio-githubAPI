export const schema = {
  title: "portfolio data",
  description: "infomation to use in section About",
  type: "object",

  properties: {
    greeting: {
      type: "string",
      description: "a friendly greeting for the user",
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

    fetchedUserData: {
      type: "object",
      description: "info about user fetched from api",
      properties: {
        avatar_url: {
          type: "string",
          description: "link to user photo",
        },
        userName: {
          type: "string",
          description: "user name on github",
        },
        location: {
          type: "string",
          description: "user location",
        },
        email: {
          type: "string",
          description: "user email",
        },
      },
    },
  },
};