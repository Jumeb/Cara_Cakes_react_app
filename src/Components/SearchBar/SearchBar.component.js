import React from 'react';
import { IoSearch } from 'react-icons/io5';

import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchContainerInput} />
            <span className={styles.searchIcon}><IoSearch /></span>
        </div>
    )
}

export default SearchBar;
