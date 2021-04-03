import React, { useState } from 'react';

import styles from './OrderList.module.css'
import { OrderFilter, OrderTable, Spacer } from '../../../Components';

const OrderList = (props) => {
    const { isDetail, setIsDetail } = props;
    const [filter, setFilter] = useState('All');
    return (
        <div className={isDetail ? styles.orderListDetail : styles.orderList}>
            <OrderFilter setFilter={setFilter} />
            <OrderTable isDetail={isDetail} setIsDetail={setIsDetail} filter={filter} />
        </div>
    )
}

export default OrderList;
