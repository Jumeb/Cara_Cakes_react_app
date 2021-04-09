import React, { useEffect, useState } from 'react';

import styles from './OrderList.module.css'
import { Language, OrderFilter, OrderTable, Profile, SearchBar } from '../../../Components';
import search from '../../../utils/search';

const OrderList = (props) => {
    const { isDetail, setIsDetail } = props;
    const [filter, setFilter] = useState('All');
    const [text, setText] = useState('');

    return (
        <div className={styles.orderList}>
            <OrderFilter setFilter={setFilter} />
            <div className={styles.orderContainer}><OrderTable isDetail={isDetail} setIsDetail={setIsDetail} filter={filter} text={text} /></div>
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar setText={setText} />
                    <Language />
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default OrderList;
