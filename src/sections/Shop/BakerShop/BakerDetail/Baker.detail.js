import React from 'react';
import { Button, Link } from '../../../../Components';

import {logo5, vals3 } from '../../../../res/img';
import { BASE_URL } from '../../../../utils/globalVariable';
import styles from './BakerDetail.module.css'

const BakerDetail = (props) => {
    const {isDetail, setIsDetail, detail} = props;
    return (
       <div className={isDetail ? styles.bakerDetail : styles.bakerNoDetail}>
            <div className={styles.bakerDetailImgContainer}>
                <div className={styles.bakerDetailTitle}>
                    <h2>{detail.companyName}</h2>
                </div>
                <img src={detail.image ? `${BASE_URL}/${detail.image}` : vals3} alt="Product" className={styles.bakerDetailImg}/>
                <div className={styles.bakerDetailImgLogoContainer}>
                    <img src={logo5} alt="Product" className={styles.bakerDetailImgLogo} />
                </div>
            </div>
            <div className={styles.bakerDetails}>
                <h1 className={styles.bakerTitle}>About CEO: {detail.name}</h1>
                <b className={styles.bakerDescription}>Categories</b>
                <ul className={styles.bakerDescriptionList}>
                    {detail.categories && detail.categories.map((category, index) => <li  className={styles.bakerDescriptionText}>{category}</li> )}
                </ul>
                <h1 className={styles.bakerDescription}>Verified: {detail.verify ? 'True' : 'False'}</h1>
                <h1 className={styles.bakerDescription}>Completed Orders: {detail.orders}</h1>
                <h1 className={styles.bakerDescription}>Biography</h1>
                <p className={styles.bakerDescriptionText}>{detail.about}</p>
                <div className={styles.bakerButtons}>
                    <Link danger={false} title="Shop" link="#" />
                    <Button title="Close" onClick={() => setIsDetail()} />
                </div>
            </div>
        </div>
    )
}

export default BakerDetail;
