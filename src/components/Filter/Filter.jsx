import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
  
  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  export default Filter;