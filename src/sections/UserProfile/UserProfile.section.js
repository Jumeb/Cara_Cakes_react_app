import React, { useEffect, useState } from 'react';
import { IoBrush } from 'react-icons/io5';
import { Redirect } from 'react-router';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { Button, Notification, SquareInput, UserImage } from '../../Components';
import { cups1 } from '../../res/img';
import styles from './UserProfile.module.css';
import { connect } from 'react-redux';
import { BASE_URL } from '../../utils/globalVariable';
import { bindActionCreators } from 'redux';
import { setUser } from '../../redux/Actions/Auth.actions';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { HNumber, SetLocation, Thousand } from '../../utils/utilities';
import { EditPassword } from '..';

const animatedComponents = makeAnimated();

const UserProfile = (props) => {
    const { user, token, refresh } = props;
    const [locations] = useState([
        { value: "North-West", label: "North-West" },
        { value: "South-West", label: "South-West" },
        { value: "West", label: "West" },
        { value: "Center", label: "Center" },
        { value: "Litoral", label: "Litoral" },
        { value: "North", label: "North" },
        { value: "East", label: "East" },
        { value: "North-West", label: "North-West" },
    ]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState({});
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditPass, setIsEditPass] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});

    useEffect(() => {
        props.setRefresh(false);
        setName(user.name || "'empty'");
        setEmail(user.email || "'empty'");
        setContact(user.telNumber || "'empty'");
        let loc = user.location;

        setLocation(SetLocation(loc, locations) || "'empty'");

        return () => {
            setName('');
            setEmail('');
            setContact('');
            setLocation('');
            setNameError(false);
            setEmailError(false);
            setContactError(false);
            setLocationError(false);
        }
    }, [refresh]);

    const Authenticate = (id) => {
        let hasError = false;
        setLoading(true);

        if (name.length < 2) {
            setNameError(true);
            hasError = true;
        }


        if (hasError) {
            return false;
        }

        const body = {
            name,
            contact,
            email,
            location: location.value,
        }

        fetch(`${BASE_URL}/user/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(res => {
                const statusCode = res.status;
                const response = res.json();
                return Promise.all([statusCode, response]);
            })
            .then(res => {
                const statusCode = res[0];
                const response = res[1];
                setLoading(false);

                if (statusCode === 200) {
                    props.setRefresh(true);
                    setShow(true);
                    setMessage({
                        title: 'Success',
                        message: 'Your profile has been updated'
                    });
                    props.setUser(response.user);
                }

            })
            .catch(err => {
                console.log(err);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.',
                });
            })
    }

    return (
        <> {(!token || !user.hasOwnProperty('name')) ? <Redirect to="/user/shop" /> :
            <div className={styles.aprofile}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileBoard}>
                            <img src={user.image ? `${BASE_URL}/${user.image}` : cups1} alt={'Username'} className={styles.profileImg} />
                            <button className={styles.profileEdit} onClick={() => setIsOpen(true)}><IoBrush className={styles.profileIcon} /></button>
                        </div>
                        <div className={styles.profileCredentials}>
                            <h2 className={styles.profileName}>{name}</h2>
                            <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{HNumber(contact) || "'empty'"}</span> | <span className={styles.profileSubInfo} >{user.location || "'location'"}</span></h3>
                            <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{user.location || "'empty'"}</span>  | <span className={styles.profileSubInfo} >{email}</span> </h3>
                        </div>
                        <div className={styles.profileStats}>
                            <div className={styles.profileNumber}>
                                <h2 className={styles.profileTitle}>{user.orders.ordered.length}</h2>
                                <b className={styles.profileSub}>Orders</b>
                            </div>
                            <div className={styles.profileNumber}>
                                <h2 className={styles.profileTitle}>{Thousand(user.total)}</h2>
                                <b className={styles.profileSub}>Spendings</b>
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
                                    value={location}
                                    options={locations}
                                    components={animatedComponents}
                                    onChange={value => setLocation(value)}
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
                            <div className={styles.profileActions}>
                                <Button title="Save Changes" onClick={() => Authenticate(user._id)} />
                                <Button title="Edit Password" onClick={() => setIsEditPass(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                <UserImage isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
                <Notification setShow={setShow} show={show} message={message} />
                <EditPassword isOpen={isEditPass} setIsOpen={setIsEditPass} type={'user'} />
            </div>
        }
        </>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        token: auth.token,
        user: auth.user,
        refresh: refresh.refresh,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setUser, setRefresh }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

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
