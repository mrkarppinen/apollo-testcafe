import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({onInput}) => (
    <form>
        <input type="text" name="filter" onKeyUp={ (event) => onInput(event.target.value) } />
    </form>
); 

FilterForm.propTypes = {
    onInput: PropTypes.func.isRequired
};

export default FilterForm;