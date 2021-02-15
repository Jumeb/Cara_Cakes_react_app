import React from 'react';

import styles from './Order.module.css';
import OrderList from './OrderList/Order.list';
import OrderDetail from './OrderDetail/Order.detail';

const Order = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={styles.orders}>
            <OrderList setIsDetail={setIsDetail} isDetail={isDetail} />
            <OrderDetail setIsDetail={setIsDetail} isDetail={isDetail} />
        </div>
    )
}

export default Order;