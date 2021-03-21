import React, { useState } from 'react';
import { IoBrush } from 'react-icons/io5';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { Button, SquareArea, SquareInput } from '../../Components';
import { cups1, vals3 } from '../../res/img';
import styles from './Details.module.css';
import { connect } from 'react-redux';

const animatedComponents = makeAnimated();

const Details = (props) => {
    const {user} = props;
    const [locations] = useState([
        {value:"north-west", label: "North-West"},
        {value:"south-west", label: "South-West"},
        {value:"west", label: "West"},
        {value:"center", label: "Center"},
        {value:"litoral", label: "Litoral"},
        {value:"north", label: "North"},
        {value:"east", label: "East"},
        {value:"north-west", label: "North-West"},
    ])
    return (
        <div className={styles.aprofile}>
            <div className={styles.profileContainer}>
                <div className={styles.profileInfo}>
                    <div className={styles.profileBoard}>
                        <img src={cups1} alt={'Username'} className={styles.profileImg} />
                        <img src={vals3} alt={'Username'} className={styles.profileLogo} />
                        <button className={styles.profileEdit}><IoBrush className={styles.profileIcon} /></button>
                    </div>
                    <div className={styles.profileCredentials}>
                        <h2 className={styles.profileName}>{user.name} | {user.companyName || 'House of Flavours'}</h2>
                        <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{user.telNumber}</span> | <span className={styles.profileSubInfo} >{user.idCardNumber}</span> | <span className={styles.profileSubInfo} >{user.name.substr(0, 12) || 'empty'}</span> </h3>
                        <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{user.momoNumber || 'empty'}</span>  | <span className={styles.profileSubInfo} >{user.location || 'empty'}</span>  | <span className={styles.profileSubInfo} >{user.email.substr(0, 12)}...</span> </h3>
                    </div>
                    <div className={styles.profileStats}>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.orders}</h2>
                            <b className={styles.profileSub}>Orders</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>100</h2>
                            <b className={styles.profileSub}>Ordered</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.categories.length}</h2>
                            <b className={styles.profileSub}>Categories</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.total}</h2>
                            <b className={styles.profileSub}>Earnings</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.likes.users.length}</h2>
                            <b className={styles.profileSub}>Likes</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.dislikes.users.length}</h2>
                            <b className={styles.profileSub}>Dislikes</b>
                        </div>
                    </div>
                    <div className={styles.profileAbout}>
                        <h2 className={styles.profileName}>About</h2>
                        <b className={styles.profileHistory}>
                            {user.about || "'empty'"}
                        </b>
                    </div>
                </div>
                <div className={styles.profileFormContainer}>
                    <div className={styles.profileForm}>
                        <h2 className={styles.profileName}>My Details</h2>
                        <SquareInput placeholder="Jane Doe" label="Name" />
                        <SquareInput placeholder="Henry Pastries" label="Company" />
                        <SquareInput placeholder="6x1234567" label="MOMO Number" />
                        <SquareInput placeholder="Janette Sirri" label="MOMO Name" />
                        <SquareInput placeholder="6x1234567" label="Contact" />
                        <div className={styles.profileGroup}>
                            <b className={styles.profileLabel}>Location</b>
                            <Select 
                                options={locations}
                                components={animatedComponents}
                                styles={locationStyles}
                                className={styles.profileSelect} />
                        </div>
                        <SquareInput placeholder="janedoe@gmail.cm" label="Email" />
                        <SquareArea placeholder={"Tell your story"} label="About" />
                        <div className={styles.profileActions}>
                            <Button title="Save Changes" />
                            <Button title="Edit Password" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(Details);

const locationStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#215379" : null,
      color: isFocused ? "white" : '#999',
    };
  },
  control: (base, {isFocused}) => ({
    ...base,
    border: 'none',
    // This line disable the blue border
    boxShadow: 'none',
    borderRadius: '4px',
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#14334a',
    borderTop: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#14334a',
    borderLeft: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#14334a',
    borderRight: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#14334a',
    cursor: 'pointer',
    '&:hover': {
        border: '2px',
        boxShadow: 'none',
        borderStyle: 'solid',
        borderColor: isFocused ? "#14334a" : '#14334a',
    }
  })
};
