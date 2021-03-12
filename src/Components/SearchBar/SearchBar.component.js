import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './SearchBar.module.css';
import {setPastries, setBakers} from '../../redux/Actions/Data.actions';
import search from '../../utils/search';

const SearchBar = (props) => {
    const {pastries} = props;

    const [text, setText] = useState('');

    const filterData = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        search(text, pastries, props.setPastries,'name');
    }, [text]);

    return (
        <div className={styles.searchContainer}>
            <span className={styles.searchIcon}><IoSearch /></span>
            <input type="text" className={styles.searchContainerInput} placeholder="Search" onChange={(event) => filterData(event)} />
        </div>
    )
}

const mapStateToProps = ({data}) => {
    return {
        pastries: data.pastries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries, setBakers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
