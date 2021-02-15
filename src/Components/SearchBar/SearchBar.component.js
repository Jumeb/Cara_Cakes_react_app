import React from 'react';

import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchContainerInput} />
            <span className="fas fa-search search__icon" />
        </div>
    )
}

export default SearchBar;
