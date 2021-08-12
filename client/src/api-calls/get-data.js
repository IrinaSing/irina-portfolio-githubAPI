const url = "https://api.github.com/users/IrinaSing";
export const getApiData = async () => {
  console.log("get data");
  const data = await fetch(url);
  const response = await data.json();

  return response;
};
