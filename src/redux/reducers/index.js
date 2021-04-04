import 'babel-polyfill';
import { combineReducers } from 'redux';
import { SET_USERS, SHOW_ALERT, SHOW_LOADING } from '../contains';

const users = (state = [], action) => {
	switch (action.type) {
		case SET_USERS:
			return action.allUsers
		default:
			return state;
	}
}

const showLoading = (state = false, action) => {
	switch (action.type) {
		case SHOW_LOADING:
			return action.isLoadingUsers;
		default:
			return state;
	}
}

const showAlert = (state = false, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return true;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	users,
	showAlert,
	showLoading
});

export default rootReducer;
