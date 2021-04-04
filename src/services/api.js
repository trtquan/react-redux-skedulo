import axios from "axios";
const URL = "https://api.github.com";
const config = {
  urls: {
    search: {
      users: `${URL}/search/users`,
    },
  },
};

const newRequest = (method, url, queryParams, data) =>
  axios.request({
    method: method,
    url: url,
    data: data,
    params: queryParams,
  });

export const searchUsers = (query) => {
  return (
    newRequest("get", config.urls.search.users, query, {})
  );
};
