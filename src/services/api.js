import axios from "axios";
import config from '../config'

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
