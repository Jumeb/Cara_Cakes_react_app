import React from 'react'

import CartDetail from './CartDetail/Cart.detail';
import CartList from './CartList/Cart.list';
import './Cart.section.css';

const UserSection = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className="cart">
            <CartList isDetail={isDetail} setIsDetail={setIsDetail} />
            <CartDetail isDetail={isDetail} setIsDetail={setIsDetail}/>
        </div>
    )
}

export default UserSection;
