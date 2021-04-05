import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import config from '../config'

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
  adapter: cache.adapter,
});
const newRequest = (method, url, queryParams, data) =>
  api.request({
    method: method,
    url: url,
    data: data,
    params: queryParams,
  });

export const searchUsers = (query) => {
  return newRequest("get", config.urls.search.users, query, {})
};
