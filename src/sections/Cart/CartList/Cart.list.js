import React from 'react';

import {CartTable} from '../../../Components';
import styles from './CartList.module.css';

const CartList = (props) => {
    const {isDetail, setIsDetail, setPastry} = props;

    return (
        <div className={styles.cartList}>
            <CartTable isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} />
        </div>
    )
}

export default CartList;
