const url = "https://api.github.com/users/IrinaSing";

export const getApiData = async () => {
  const data = await fetch(url);
  const response = await data.json();

  return response;
};
