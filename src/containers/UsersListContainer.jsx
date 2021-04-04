import { connect } from 'react-redux';
import UsersList from '../components/UserList';

const mapStateToProps = (state) => {
	return {
		users: state.users,
		showLoading: state.showLoading
	}
}

const UsersListContainer = connect(
	mapStateToProps,
)(UsersList);

export default UsersListContainer;