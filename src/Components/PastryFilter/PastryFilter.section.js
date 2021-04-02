import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { connect } from 'react-redux';

import styles from './PastryFilter.module.css';

const PastryFilter = (props) => {
    const { categories, setFilter } = props;
    const [showFilter, setShowFilter] = useState(false);
    const [active, setActive] = useState(-1);

    const Filter = (cat, index) => {
        setActive(index);
        setFilter(cat);
    }

    const Bakers = () => {
        console.log('happy');
        console.log(props);
        props.history.push({ pathname: '/user/shop/pastries' });
    };

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
                        <li className={styles.listFilter} onClick={() => Bakers()}>Bakers</li>
                        <li className={[styles.listFilter, active === -1 && styles.listFilterActive].join(' ')} onClick={() => Filter('all', -1)}>All</li>
                        <>
                            {categories.map((category, index) => <li className={[styles.listFilter, active === index && styles.listFilterActive].join(' ')} onClick={() => Filter(category, index)}>{category}</li>)}
                        </>
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

export default connect(mapStateToProps)(PastryFilter);
