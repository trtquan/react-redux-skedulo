import {
  SET_USERS,
  SHOW_ALERT,
  SHOW_LOADING
} from "../contains";
import {searchUsers} from "../../services/api"
import { setupCache } from 'axios-cache-adapter'

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

export const showAlert = () => {
  return {
    type: SHOW_ALERT,
  };
};

export const showLoading = (isLoadingUsers) => {
  return {
    type: SHOW_LOADING,
    isLoadingUsers
  };
};

export const setUsers = (allUsers) => {
  return {
    type: SET_USERS,
    allUsers,
  };
};

export const filterListOfUsers = (jsonData, value) => {
  return (dispatch) => {
    if ("items" in jsonData) {
      let filteredUsers = jsonData["items"]
        .filter((userObj) => {
          return userObj["login"].startsWith(value);
        })
        .map((userObj) => {
          const {login, avatar_url: avtURL, type, score } = userObj;
          return {login, avtURL, type, score};
        });
      dispatch(setUsers(filteredUsers));
    } else {
      dispatch(showAlert());
    }
  };
};

export const getListOfUsers = (value) => {
  const thunk = (dispatch) => {
    if (value.length >= 3) {
      dispatch(showLoading(true))
      const paramSearch = {q: value, per_page: 100}
      return searchUsers(paramSearch)
        .then(async response => {
          const length = await cache.store.length()

          console.log('Cache store length:', length)
          return response.data
        })
        .then((data) => {
          dispatch(filterListOfUsers(data, value));
          dispatch(showLoading(false))
        })
        .catch(error => {
          console.log(error)
          dispatch(showAlert());
        });
    } else {
      const filteredUsers = [];
      dispatch(setUsers(filteredUsers));
    }
  };
  thunk.meta = {
    debounce: {
      time: 500,
      key: "GET_GITHUB_USERS",
    },
  };
  return thunk;
};
