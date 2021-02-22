import React from 'react';
import PropTypes from 'prop-types';


function SearchInput(props) {
    
  return (
    <input type="text" name="search" style={{width: '100%', height: '50px'}} onKeyUp={(e) => props.cbSearch(e)} placeholder="search for a user" />
  );
}

SearchInput.propTypes = {
  cbSearch: PropTypes.func.isRequired
};

export default SearchInput;