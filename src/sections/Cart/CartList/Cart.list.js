import React from 'react';

import { CartTable, Language, Profile, SearchBar } from '../../../Components';
import styles from './CartList.module.css';

const CartList = (props) => {
    const {isDetail, setIsDetail, setPastry} = props;

    return (
        <div className={styles.cartList}>
            <div className={styles.cartContainer}><CartTable isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} /></div>
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar />
                    <Language />
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default CartList;
