import React from 'react';
import { Button, Link, Spacer } from '../../../../Components';

import {logo5, vals3 } from '../../../../res/img';
import styles from './BakerDetail.module.css'

const BakerDetail = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
       <div className={isDetail ? styles.bakerDetail : styles.bakerNoDetail}>
            <div className={styles.bakerDetailImgContainer}>
                <div className={styles.bakerDetailTitle}>
                    <h2>Company Name</h2>
                </div>
                <img src={vals3} alt="Product" className={styles.bakerDetailImg}/>
                <div className={styles.bakerDetailImgLogoContainer}>
                    <img src={logo5} alt="Product" className={styles.bakerDetailImgLogo} />
                </div>
            </div>
            <div className={styles.bakerDetails}>
                <h1>About CEO: Tuijah Christian</h1>
                <h1 className={styles.bakerDescription}>Categories</h1>
                <ul className={styles.bakerDescriptionList}>
                    <li  className={styles.bakerDescriptionText}>Birthday Cakes</li>
                    <li  className={styles.bakerDescriptionText}>Wedding Cakes</li>
                    <li  className={styles.bakerDescriptionText}>Cookies</li>
                    <li  className={styles.bakerDescriptionText}>Valentines</li>
                </ul>
                <h1 className={styles.bakerDescription}>Order: 45</h1>
                <h1 className={styles.bakerDescription}>Biography</h1>
                <p className={styles.bakerDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div className={styles.bakerButtons}>
                    <Link danger={false} title="Shop" link="#" />
                    <Button title="Close" onClick={() => setIsDetail()} />
                </div>
            </div>
        </div>
    )
}

export default BakerDetail;
