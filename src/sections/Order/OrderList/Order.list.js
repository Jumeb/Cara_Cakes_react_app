import React, { useState } from 'react';

import styles from './OrderList.module.css'
import { Language, OrderFilter, OrderTable, Profile, SearchBar, Spacer } from '../../../Components';

const OrderList = (props) => {
    const { isDetail, setIsDetail } = props;
    const [filter, setFilter] = useState('All');
    return (
        <div className={styles.orderList}>
            <OrderFilter setFilter={setFilter} />
            <div className={styles.orderContainer}><OrderTable isDetail={isDetail} setIsDetail={setIsDetail} filter={filter} /></div>
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar />
                    <Language />
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default OrderList;
