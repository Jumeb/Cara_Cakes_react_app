import React from 'react';

import styles from './OrderList.module.css'
import { OrderTable, Spacer } from '../../../Components';

const OrderList = () => {
    return (
        <div className="order__list">
            <Spacer />
            <OrderTable />
        </div>
    )
}

export default OrderList;
