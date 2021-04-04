import { connect } from 'react-redux';
import { getListOfUsers, } from '../redux/actions';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeValue: (val) => {
			dispatch(getListOfUsers(val));
    	}
	}
}

const SearchBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;