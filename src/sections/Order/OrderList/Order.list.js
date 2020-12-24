import React from 'react';

import './Order.list.css'
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
