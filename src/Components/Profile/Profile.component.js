import React from 'react';
import { connect } from 'react-redux';
import { HLogo, vals3 } from '../../res/img';
import { BASE_URL } from '../../utils/globalVariable';

import styles from './Profile.module.css';

const Profile = ({user}) => {
    return (
        <div className={styles.profile}>
            <b className={styles.profileUserName}>{user.name ? user.name.substr(0, 12) : '..HOF..'}</b>
            <img src={user.image ? `${BASE_URL}/${user.image}` : user.ceoImage ? `${BASE_URL}/${user.ceoImage}` : HLogo} className={styles.profileImg} alt="Profile_Image"/>
        </div>
    )
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(Profile);
