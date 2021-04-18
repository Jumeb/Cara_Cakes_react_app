import React, { useEffect, useState } from 'react';
import { IoBrush } from 'react-icons/io5';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { AdminImage, Button, Notification, SquareArea, SquareInput } from '../../Components';
import { cups1, HLogo, HouseLogo } from '../../res/img';
import styles from './BakerProfile.module.css';
import { connect } from 'react-redux';
import { BASE_URL } from '../../utils/globalVariable';
import { bindActionCreators } from 'redux';
import { setUser } from '../../redux/Actions/Auth.actions';
import { SetLocation, SetCategories, Thousand, HNumber } from '../../utils/utilities';
import { EditPassword } from '..';

const animatedComponents = makeAnimated();

const BakerProfile = (props) => {
    const { user, token } = props;
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
    const [_categories] = useState([
        { value: 'birthday-cake', label: 'Birthday Cakes' },
        { value: 'wedding-cake', label: 'Wedding Cakes' },
        { value: 'cookies', label: 'Cookies' },
        { value: 'doughnuts', label: 'Doughnuts' },
        { value: 'pancakes', label: 'Pancakes' },
        { value: 'cup-cakes', label: 'Cup Cakes' },
        { value: 'pizzas', label: 'Pizzas' },
        { value: 'pies', label: 'Pies' },
        { value: 'gift-baskets', label: 'Gift Baskets' },
        { value: 'valentines', label: 'Valentines' },
    ]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [momoName, setMomoName] = useState('');
    const [momo, setMomo] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [location, setLocation] = useState({});
    const [about, setAbout] = useState('');
    const [categories, setCategories] = useState([]);
    const [nameError, setNameError] = useState(false);
    const [companyError, setCompanyError] = useState(false);
    const [momoNameError, setMomoNameError] = useState(false);
    const [momoError, setMomoError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const [aboutError, setAboutError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditPass, setIsEditPass] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    let Categories = [];


    useEffect(() => {
        setName(user.name || "'empty'");
        setCompany(user.companyName || "'empty'");
        setMomoName(user.momoName || "'empty'");
        setMomo(user.momoNumber || "'empty'");
        setEmail(user.email || "'empty'");
        setAbout(user.about || "'empty'");
        setContact(user.telNumber || "'empty'");
        setAbout(user.about || "'empty'");
        setCategories(user.categories);
        let loc = user.location;
        let cats = user.categories;
    
        setLocation(SetLocation(loc, locations) || "'empty'")
        setCategories(SetCategories(cats, _categories));

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

    const Authenticate = (id) => {
        let hasError = false;
        setLoading(true);

        if (name.length < 2) {
            setNameError(true);
            hasError = true;
        }

        if (company.length < 6) {
            setCompanyError(true);
            hasError = true;
        }

        if (momoName.length < 9) {
            setMomoNameError(true);
            hasError = true;
        }

        if (momo.length < 9) {
            setMomoError(true);
            hasError = true;
        }

        if (about.length < 10) {
            setAboutError(true);
            hasError = true;
        }

        if (hasError) {
            return false;
        }

        if(!hasError) {
            if(categories){categories.map((value, index) => (
                Categories.push(value.label)
            ))}
        }

        const body = {
            name,
            company,
            categories: Categories,
            about,
            momo,
            momoName,
            contact,
            email,
            location: location.value,
        }

        fetch(`${BASE_URL}/baker/profile/${id}`, {
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
                    setShow(true);
                    setMessage({
                        title: 'Success',
                        message: 'Your profile has been updated'
                    });
                    props.setUser(response.baker);
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
        <div className={styles.aprofile}>
            <div className={styles.profileContainer}>
                <div className={styles.profileInfo}>
                    <div className={styles.profileBoard}>
                        <img src={user.ceoImage ? `${BASE_URL}/${user.ceoImage}`  : HouseLogo} alt={'Username'} className={styles.profileImg} />
                        <img src={user.companyImage ? `${BASE_URL}/${user.companyImage}`  : HLogo} alt={'Username'} className={styles.profileLogo} />
                        <button className={styles.profileEdit} onClick={() => setIsOpen(true)}><IoBrush className={styles.profileIcon} /></button>
                    </div>
                    <div className={styles.profileCredentials}>
                        <h2 className={styles.profileName}>{name.substr(0, 15)} | {company.substr(0, 15) || 'House of Flavours'}</h2>
                        <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{HNumber(contact) || "'empty'"}</span> | <span className={styles.profileSubInfo} >{user.idCardNumber}</span> | <span className={styles.profileSubInfo} >{momoName.substr(0, 12) || "'empty'"}</span> </h3>
                        <h3 className={styles.profileSubTitle}><span className={styles.profileSubInfo} >{HNumber(momo) || "'empty'"}</span>  | <span className={styles.profileSubInfo} >{user.location || "'empty'"}</span>  | <span className={styles.profileSubInfo} >{email.substr(0, 12)}...</span> </h3>
                    </div>
                    <div className={styles.profileStats}>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.orders.ordered.length}</h2>
                            <b className={styles.profileSub}>Orders</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.followers.users.length}</h2>
                            <b className={styles.profileSub}>Followers</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{user.categories.length}</h2>
                            <b className={styles.profileSub}>Categories</b>
                        </div>
                        <div className={styles.profileNumber}>
                            <h2 className={styles.profileTitle}>{Thousand(user.total)}</h2>
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
                            {about}
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
                            <b className={styles.profileLabel}>Categories</b>
                            <div className={styles.selectWidth}>
                                <Select
                                    value={categories}
                                    options={_categories}
                                    components={animatedComponents}
                                    onChange={value => setCategories(value)}
                                    styles={locationStyles}
                                    isMulti
                                    className={styles.profileSelect}
                                />
                            </div>
                        </div>
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
                        <SquareArea
                            placeholder={"Tell your story"}
                            label="About"
                            value={about}
                            setValue={event => setAbout(event.target.value)}
                            error={aboutError}
                            setError={setAboutError}
                        />
                        <div className={styles.profileActions}>
                            <Button title="Save Changes" onClick={() => Authenticate(user._id)} />
                            <Button title="Edit Password" onClick={() => setIsEditPass(true)} />
                        </div>
                    </div>
                </div>
            </div>
            <AdminImage isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
            <Notification setShow={setShow} show={show} message={message} />
            <EditPassword isOpen={isEditPass} setIsOpen={setIsEditPass} type={'baker'} />

        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.token,
        user: auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BakerProfile);

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
