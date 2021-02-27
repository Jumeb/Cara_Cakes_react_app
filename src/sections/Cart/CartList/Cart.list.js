import React from 'react';

import {CartTable, Spacer} from '../../../Components';
import styles from './CartList.module.css';

const CartList = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? styles.cartListDetail : styles.cartList}>
            <CartTable isDetail={isDetail} setIsDetail={setIsDetail} />
        </div>
    )
}

export default CartList;
