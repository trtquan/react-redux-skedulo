import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import '../styles/SearchBar.css';
const SearchBar = ({ onChangeValue }) => {
	return (
    <Input icon='search' className="search-bar--skedulo" placeholder='Enter github user...' onChange={(e) => onChangeValue(e.target.value)}/>
	)
}

SearchBar.propTypes = {
	onChangeValue: PropTypes.func.isRequired
};

export default SearchBar;