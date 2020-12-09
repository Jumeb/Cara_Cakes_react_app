/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { vals3 } from '../../res/img';

import './Profile.component.css';

const Profile = () => {
    return (
        <div className="profile">
            <img src={vals3} className="profile__img" alt="Profile Image"/>
            <p className="profile_userName">Jume Brice</p>
        </div>
    )
}

export default Profile;
