import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { connect } from 'react-redux';

import styles from './OrderFilter.module.css';

const OrderFilter = (props) => {
    const { categories, setFilter } = props;
    const [showFilter, setShowFilter] = useState(false);
    const [active, setActive] = useState(-1);

    const Filter = (cat, index) => {
        setActive(index);
        setFilter(cat);
    }

    return (
        <>
            <div className={styles.filterPosition}>
                <div className={styles.fixedPosition} onClick={() => setShowFilter(!showFilter)}>
                    {showFilter ? 'Hide' : 'Show'} Filter{showFilter ? <IoChevronBack className={styles.icon} /> : <IoChevronForward className={styles.icon} />}
                </div>
            </div>
            <div className={showFilter ? styles.filterCategories : styles.filterCategoriesHide}>
                <div className={styles.categoriesFixed}>
                    <ul className={styles.listCategories}>
                        <li className={[styles.listFilter, active === -1 && styles.listFilterActive].join(' ')} onClick={() => Filter('All', -1)}>All</li>
                        <li className={[styles.listFilter, active === 0 && styles.listFilterActive].join(' ')} onClick={() => Filter('New', 0)}>New</li>
                        <li className={[styles.listFilter, active === 1 && styles.listFilterActive].join(' ')} onClick={() => Filter('Registered', 1)}>Registered</li>
                        <li className={[styles.listFilter, active === 2 && styles.listFilterActive].join(' ')} onClick={() => Filter('Processing', 2)}>Processing</li>
                        <li className={[styles.listFilter, active === 3 && styles.listFilterActive].join(' ')} onClick={() => Filter('Delivered', 3)}>Delivered</li>
                        <li className={[styles.listFilter, active === 4 && styles.listFilterActive].join(' ')} onClick={() => Filter('Confirmed', 4)}>Confirmed</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({ data }) => {
    return {
        categories: data.categories,
    }
}

export default connect(mapStateToProps)(OrderFilter);
