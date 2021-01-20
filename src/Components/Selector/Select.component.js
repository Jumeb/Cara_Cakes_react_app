import React from 'react';
import Select from 'react-select';

// import styles from './Select.compent.css';

const Selector = (options, multi) => {
    return (
        <Select 
        multi={multi} 
        options={options} 
        color="#333"
        dropdownGap={0} />
    )
}

export default Selector;
