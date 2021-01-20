import React from 'react';

import styles from './BakersCard.module.css'
import {pans1} from '../../res/img';
import { NavLink } from 'react-router-dom';

const BakersCard = (props) => {
    const {baker} = props;
    return (
        <div className={styles.bakerContainer}>
            <div className={styles.bakerInfo}>
                <h3 className={styles.lilTitle}>The Founder</h3>
                <p>
                    I really loved baking from when I was really young, because my mum did a lot of baking. Growing up I used to supply power to my mum in the mixing and checking. Now I am used to it and I did a lot of experimenting.
                </p>
                <div className={styles.bakerInfoPic}>
                    <div className={styles.bakerInfoPicRound}>
                        <img src={pans1} alt="Founder" className={styles.bakerInfoImg} />
                    </div>
                    <NavLink to="/hlloe"
                        className={styles.bakerInfoName}>{baker.name}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default BakersCard;
