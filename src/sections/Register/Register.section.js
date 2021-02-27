import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { ButtonOne, Input, LinkOne } from '../../Components';
import RadioButton from '../../Components/RadioButtons/RadioButtons.component';
import { AuthMail, AuthTel } from '../../utils/auth';
import styles from './Register.module.css';
import {BASE_URL} from '../../utils/globalVariable';

const animatedComponents = makeAnimated();

const RegisterSection = (props) => {
    const {
        name,
        email,
        tel,
        password,
        conPw,
        categories,
        idCard,
        errorIdCard,
        setName,
        setEmail,
        companyName,
        setTel,
        setIdCard,
        setPassword,
        setCompanyName,
        setCategories,
        setConPw,
        errorName,
        errorEmail,
        errorCompanyName,
        errorTel,
        errorPassword,
        errorConPw,
        setErrorName,
        setErrorEmail,
        setErrorTel,
        setErrorIdCard,
        setErrorPassword,
        setErrorCompanyName,
        setErrorConPw,
        loading,
        setLoading,
    } = props;

    const [type, setType] = useState('');
    const [_categories] = useState([
        { value: 'birthday-cake', label: 'Birthday Cakes' },
        { value: 'wedding-cake', label: 'Wedding Cakes' },
        { value: 'cookies', label: 'Cookies' },
        { value: 'doughnuts', label: 'Doughnuts' },
        { value: 'pancakes', label: 'Pancakes' },
        { value: 'cup-cakes', label: 'Cup Cake' },
    ]);
    
    const nextPage = () => {
        props.history.push({pathname: '/register/baker'});
    }

    const authenticate = () => {
        let hasError = false;
        setLoading(true);

        if (name.length < 5) {
            hasError = true;
            setErrorName(true);
        }

        if (!AuthMail(email)) {
            hasError = true;
            setErrorEmail(true);
        }

        if (!AuthTel(tel)) {
            hasError = true;
            setErrorTel(true);
        }

        if(password.length < 5) {
            hasError = true;
            setErrorPassword(true);
        }

        if (password !== conPw) {
            hasError = true;
            setErrorPassword(true);
            setErrorConPw(true);
        }

        if(hasError) {
            console.log('I have errors');
            console.log(name, email, tel, password, conPw);
            setLoading(false)
            return false;
        }

        const body = {
            name,
            tel,
            email,
            password
        }

        console.log(body);


        let statusCode, responseJson;
        let url = `${BASE_URL}/user/register`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((response) => {
            statusCode = response.status;
            responseJson = response.json();
            return Promise.all([statusCode, responseJson]);
        })
        .then((res) => {
            statusCode = res[0];
            responseJson = res[1];
            setLoading(false);
            console.log(responseJson);
        })
        .catch(err => {
            console.log(err, 'The ultimate error');
            setLoading(false);
        })
    }

    return (
        <section className={styles.secSignup} id="signup">
                <div className={styles.signup}>
                    <div className={styles.signupForm}>
                        <div>
                            <Input 
                                len={1}
                                type='text'
                                placeholder="Jane Price"
                                label="Name"
                                value={name}
                                setValue={(event) => setName(event.target.value)}
                                error={errorName}
                                serError={() => setErrorName()}
                            />
                            <Input
                                len={2}
                                type="email"
                                placeholder="janeprice@gmail.com"
                                label="Email"
                                value={email}
                                setValue={(event) => setEmail(event.target.value)}
                                error={errorEmail}
                                serError={() => setErrorEmail()}
                             />
                             <Input
                                len={3}
                                type='number'
                                placeholder={681726633}
                                label="Telephone number"
                                value={tel}
                                setValue={(event) => setTel(event.target.value)}
                                error={errorTel}
                                serError={() => setErrorTel()}
                             />
                            <div className={styles.formGroup}>
                                <RadioButton type="Client" setType={setType} />
                                <RadioButton type="Baker" setType={setType} />
                            </div>
                            {type === "Client" && (
                                <>
                                    <Input
                                        len={4}
                                        type="password"
                                        placeholder="********"
                                        label="Password"
                                        value={password}
                                        setValue={(event) => setPassword(event.target.value)}
                                        error={errorPassword}
                                        serError={() => setErrorPassword()}
                                    />
                                    <Input
                                        len={5}
                                        type="password"
                                        placeholder="********"
                                        label="Confirm password"
                                        value={conPw}
                                        setValue={(event) => setConPw(event.target.value)}
                                        error={errorConPw}
                                        serError={() => setErrorConPw()}
                                    />
                                </>
                            )}
                            {type === "Baker" && (
                                <>
                                    <Input 
                                        len={4}
                                        type='number'
                                        placeholder='000400370'
                                        label='ID card number'
                                        value={idCard}
                                        setValue={(event) => setIdCard(event.target.value)}
                                        error={errorIdCard}
                                        serError={() => setErrorIdCard()}
                                    />
                                    <Input 
                                        len={5}
                                        type='text'
                                        placeholder='Henry pastries'
                                        label='Company name'
                                        value={companyName}
                                        setValue={(event) => setCompanyName(event.target.value)}
                                        error={errorCompanyName}
                                        serError={() => setErrorCompanyName()}
                                    />
                                    <div className={styles.formSelect}>
                                        <Select 
                                            value={categories}
                                            options={_categories}
                                            styles={colourStyles}
                                            onChange={(value) => setCategories(value)}
                                            components={animatedComponents} 
                                            isMulti 
                                            className="formLength-4 form__select-input" />
                                    </div>
                                    <Input 
                                        len={5}
                                        type='password'
                                        placeholder="******"
                                        label="Password"
                                        value={password}
                                        setValue={(event) => setPassword(event.target.value)}
                                        error={errorPassword}
                                        serError={() => setErrorPassword()}
                                    />
                                </>
                            )}
                            <div className={styles.formGroup}>
                                {type === "Client" && (
                                    <>
                                        <LinkOne link="/login" title="Login" />
                                        <ButtonOne title="Register" onClick={() => authenticate()} />
                                    </>
                                )}
                                {type === "Baker" && (
                                    <>
                                        <LinkOne link="/login" title="Login" />
                                        <ButtonOne title="Register" onClick={() => authenticate()} />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.signupContainer}>
                        <h2 className={styles.title}>
                            Sign up
                        </h2>
                    </div>
            </div>
        </section>
    )
}

export default RegisterSection;

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#ff1493" : null,
      color: isFocused ? "white" : '#999',
    };
  },
  control: (base, {isFocused}) => ({
    ...base,
    border: 'none',
    // This line disable the blue border
    boxShadow: 'none',
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: isFocused ? "#ff1493" : 'transparent',
    borderRadius: '2px',
    // overflow: 'hidden',
    // clipPath: ,
    
    '&:hover': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: isFocused ? "#ff1493" : 'transparent',
    }
  })
};
