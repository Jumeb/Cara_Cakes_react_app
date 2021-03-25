import React, { useEffect, useState } from 'react';
import { IoBrush } from 'react-icons/io5';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { Button, SquareArea, SquareInput } from '../../Components';
import { cups1, vals3 } from '../../res/img';
import styles from './AdminProfile.module.css';
import { connect } from 'react-redux';

const animatedComponents = makeAnimated();

const AdminProfile = (props) => {
    const {user} = props;
    const [locations] = useState([
        { value: "north-west", label: "North-West" },
        { value: "south-west", label: "South-West" },
        { value: "west", label: "West" },
        { value: "center", label: "Center" },
        { value: "litoral", label: "Litoral" },
        { value: "north", label: "North" },
        { value: "east", label: "East" },
        { value: "north-west", label: "North-West" },
    ]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [momoName, setMomoName] = useState('');
    const [momo, setMomo] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState('');
    const [about, setAbout] = useState('');
    const [nameError, setNameError] = useState(false);
    const [companyError, setCompanyError] = useState(false);
    const [momoNameError, setMomoNameError] = useState(false);
    const [momoError, setMomoError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const [aboutError, setAboutError] = useState(false);


    useEffect(() => {
        setName(user.name || "'empty'");
        setCompany(user.companyName || "'empty'");
        setMomoName(user.momoName || "'empty'");
        setMomo(user.momoNumber || "'empty'");
        setEmail(user.email || "'empty'");
        setAbout(user.about || "'empty'");
        setContact(user.telNumber || "'empty'");
        setLocation(user.location || "'empty'");
        setAbout(user.about || "'empty'");

        return () => {
            setName('');
            setCompany('');
            setMomoName('');
            setMomo('');
            setEmail('');
            setAbout('');
            setContact('');
            setLocation('');
            setAbout('');
            setNameError(false);
            setCompanyError(false);
            setMomoNameError(false);
            setMomoError(false);
            setEmailError(false);
            setAboutError(false);
            setContactError(false);
            setAboutError(false);
            setLocationError(false);
        }
    }, [])

    const Authenticate = () => {
        let hasError = false;
        setLoading(true);

    }

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
                        <h2 className={styles.profileName}>{name} | {company || 'House of Flavours'}</h2>
                        <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{contact || "'empty'"}</span> | <span className={styles.profileSubInfo} >{user.idCardNumber}</span> | <span className={styles.profileSubInfo} >{name.substr(0, 12) || "'empty'"}</span> </h3>
                        <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{momo || "'empty'"}</span>  | <span className={styles.profileSubInfo} >{location || "'empty'"}</span>  | <span className={styles.profileSubInfo} >{email.substr(0, 12)}...</span> </h3>
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
                            {about || "'empty'"}
                        </b>
                    </div>
                </div>
                <div className={styles.profileFormContainer}>
                    <div className={styles.profileForm}>
                        <h2 className={styles.profileName}>My Details</h2>
                        <SquareInput
                            placeholder="Jane Doe"
                            label="Name"
                            value={name}
                            setValue={event => setName(event.target.value)}
                            error={nameError}
                            setError={setNameError}
                        />
                        <SquareInput
                            placeholder="Henry Pastries"
                            label="Company"
                            value={company}
                            setValue={event => setCompany(event.target.value)}
                            error={companyError}
                            setError={setCompanyError}
                        />
                        <SquareInput
                            placeholder="6x1234567"
                            label="MOMO Number"
                            value={momo}
                            setValue={event => setMomo(event.target.value)}
                            error={momoError}
                            setError={setCompanyError}
                        />
                        <SquareInput
                            placeholder="Janette Sirri"
                            label="MOMO Name"
                            value={momoName}
                            setValue={event => setMomoName(event.target.value)}
                            error={momoNameError}
                            setError={setMomoNameError}
                        />
                        <SquareInput
                            placeholder="6x1234567"
                            label="Contact"
                            value={contact}
                            setValue={event => setContact(event.target.value)}
                            error={contactError}
                            setError={setContactError}
                        />
                        <div className={styles.profileGroup}>
                            <b className={styles.profileLabel}>Location</b>
                            <Select 
                                options={locations}
                                components={animatedComponents}
                                styles={locationStyles}
                                className={styles.profileSelect} />
                        </div>
                        <SquareInput
                            placeholder="janedoe@gmail.cm"
                            label="Email"
                            value={email}
                            setValue={event => setEmail(event.target.value)}
                            error={emailError}
                            setError={setEmailError}
                        />
                        <SquareArea
                            placeholder={"Tell your story"}
                            label="About"
                            value={about}
                            setValue={event => setAbout(event.target.value)}
                            error={aboutError}
                            setError={setAboutError}
                        />
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

export default connect(mapStateToProps)(AdminProfile);

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
