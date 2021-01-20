import React from 'react';

import {CartTable, Spacer} from '../../../Components';
import { dons2, pans2 } from '../../../res/img';
import styles from './CartList.module.css';

const CartList = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={"cart__list"}>
            <Spacer />
            <CartTable />
        </div>
    )
}

export default CartList;
