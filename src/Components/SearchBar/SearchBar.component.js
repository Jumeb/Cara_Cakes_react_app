import React from 'react';
import { IoSearch } from 'react-icons/io5';

import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <span className={styles.searchIcon}><IoSearch /></span>
            <input type="text" className={styles.searchContainerInput} placeholder="Search" />
        </div>
    )
}

export default SearchBar;
