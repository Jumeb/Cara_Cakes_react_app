import React from 'react';

import './Order.section.css';
import OrderList from './OrderList/Order.list';
import OrderDetail from './OrderDetail/Order.detail';

const Order = () => {
    return (
        <div className="orders">
            <OrderList />
            <OrderDetail />
        </div>
    )
}

export default Order;