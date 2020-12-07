import React from 'react'

import CartDetail from './CartDetail/Cart.detail';
import CartList from './CartList/Cart.list';
import './Cart.section.css';

const UserSection = () => {
    return (
        <div className="cart">
            <CartList />
            <CartDetail />
        </div>
    )
}

export default UserSection;
