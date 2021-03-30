import React from 'react';

import styles from './BakersCard.module.css'
import {pans1} from '../../res/img';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../utils/globalVariable';

const BakersCard = (props) => {
    const {baker} = props;
    return (
        <div className={styles.bakerContainer}>
            <div className={styles.bakerInfo}>
                <h3 className={styles.lilTitle}>The Founder</h3>
                <p>
                    {baker.about ? baker.about.substr(0, 220) : "'empty'"}...
                </p>
                <div className={styles.bakerInfoPic}>
                    <div className={styles.bakerInfoPicRound}>
                        <img src={baker.ceoImage ? `${BASE_URL}/${baker.ceoImage}` : pans1} alt="Founder" className={styles.bakerInfoImg} />
                    </div>
                    <NavLink to="/hlloe"
                        className={styles.bakerInfoName}>{baker.name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default BakersCard;
