import React from 'react';

import './SearchBar.component.css';

const SearchBar = () => {
    return (
        <div className="search__container">
            <input type="text" className="search__container-input" />
            <span className="fas fa-search search__icon" />
        </div>
    )
}

export default SearchBar;
