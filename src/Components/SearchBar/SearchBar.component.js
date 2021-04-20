import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './SearchBar.module.css';
import {setPastries, setBakers} from '../../redux/Actions/Data.actions';
import search from '../../utils/search';
import { HLogo } from '../../res/img';

const SearchBar = (props) => {
    const { setText } = props;

    return (
        <>
            <img src={HLogo} alt="Logo" className={styles.mobileLogo} />
            <div className={styles.searchContainer}>
                <span className={styles.searchIcon}><IoSearch /></span>
                <input type="text" className={styles.searchContainerInput} placeholder="Search" onChange={(e) => setText(e.target.value)} />
            </div>
        </>
    )
};

const mapStateToProps = ({data}) => {
    return {
        pastries: data.pastries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries, setBakers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
