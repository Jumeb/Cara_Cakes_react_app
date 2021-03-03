import React from 'react';
import { IoMail, IoThumbsDownSharp, IoThumbsUpSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import { cups2 } from '../../res/img';
import styles from './BakerInfo.module.css';

const BakerInfo = () => {
    return (
        <div className={styles.bakerCard}> 
            <div className={styles.bakerInfo}>
                <img src={cups2} alt="Baker name" className={styles.bakerImg} />
                <div className={styles.bakerId}>
                    <h2 className={styles.bakerTitle}>Noella Cara</h2>
                    <b className={styles.bakerSubTitle}>C & K</b>
                </div>
                <button className={styles.bakerButton}>Details</button>
            </div>
            <div className={styles.bakerStats}>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>60</h2>
                    <b className={styles.bakerSubTitle}>Orders</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>10</h2>
                    <b className={styles.bakerSubTitle}>Ordered</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>5</h2>
                    <b className={styles.bakerSubTitle}>Categories</b>
                </div>
                <div className={styles.bakerNumber}>
                    <h2 className={styles.bakerTitle}>50k</h2>
                    <b className={styles.bakerSubTitle}>Total</b>
                </div>
            </div>
            <div className={styles.bakerFooter}>
                {/* <NavLink to="#" className={styles.bakerMsg}><IoMail className={styles.bakerIcon} /> MESSAGE</NavLink> */}
                <div className={styles.bakerRating}>
                    <b className={styles.bakerRatingVal}><IoThumbsUpSharp className={styles.bakerRatingIcon} /> 23K</b>
                    <b className={styles.bakerRatingVal}><IoThumbsDownSharp className={styles.bakerRatingIcon} /> 2K</b>
                </div>
                <button className={styles.bakerBtn}>Suspend</button>
            </div>
        </div>
    )
}

export default BakerInfo;
