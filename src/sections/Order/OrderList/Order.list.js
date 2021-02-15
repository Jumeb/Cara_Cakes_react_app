import React from 'react';

import styles from './OrderList.module.css'
import { OrderTable, Spacer } from '../../../Components';

const OrderList = (props) => {
     const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? styles.orderListDetail : styles.orderList}>
            <Spacer />
            <OrderTable isDetail={isDetail} setIsDetail={setIsDetail} />
        </div>
    )
}

export default OrderList;
