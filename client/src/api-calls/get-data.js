/**
 * Fetches a specific resource from the typicode jsonplaceholder API.
 *
 * @async
 * @param {string} url - The api url for fetching.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */

export const getApiData = async (url) => {
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  const response = await data.json();

  return response;
};
