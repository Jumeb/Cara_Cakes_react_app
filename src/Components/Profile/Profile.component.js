import React from 'react';
import { vals3 } from '../../res/img';

import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={vals3} className={styles.profileImg} alt="Profile_Image"/>
            {/* <p className="profile_userName">Jume Brice</p> */}
        </div>
    )
}

export default Profile;
