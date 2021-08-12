import { getApiData } from "../api-calls/get-data.js";
import { state } from "../init/state.js";

// const url = "https://api.github.com/users/IrinaSing";

export const updateData = async (getResponse) => {
  // const getResponse = await getApiData(url);

  const avatar = getResponse.avatar_url;
  state.fetchedUserData.avatar_url = avatar;

  const userName = getResponse.name;
  state.fetchedUserData.userName = userName;

  const userLocation = getResponse.location;
  state.fetchedUserData.location = userLocation;

  const userEmail = getResponse.email;
  state.fetchedUserData.email = userEmail;
  console.log(state.fetchedUserData.location);
};
