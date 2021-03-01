import React from 'react';
import { vals3 } from '../../res/img';

import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <b className={styles.profileUserName}>Jume Brice</b>
            <img src={vals3} className={styles.profileImg} alt="Profile_Image"/>
        </div>
    )
}

export default Profile;
