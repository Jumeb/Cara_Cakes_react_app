import React, { useState } from 'react'

import CartList from './CartList/Cart.list';
import styles from './Cart.module.css';
import { PastryCart, PastryCartV2 } from '../../Components';

const UserSection = (props) => {
    const {} = props;
    const [isDetail, setIsDetail] = useState(false);
    const [pastry, setPastry] = useState([]);

    return (
        <div className={styles.cart}>
            <CartList isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} />
            <PastryCartV2 pastry={pastry} detail={isDetail} setDetail={setIsDetail} />
        </div>
    )
}

export default UserSection;
