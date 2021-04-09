import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './Login.module.css'
import {LinkOne, ButtonThree, Input, ButtonOne, Notification} from '../../Components';
import { AuthMail } from '../../utils/auth';
import { BASE_URL } from '../../utils/globalVariable';
import {setUser, setToken} from '../../redux/Actions/Auth.actions'

const LoginSection = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});



    const authenticate = () => {
        let hasError = false;
        let user = 'User';
        setLoading(true);

        if (!AuthMail(email)) {
            user = 'Baker';
        }

        if(password.length < 5) {
            hasError = true;
            setPasswordError(true);
        }

        if(hasError) {
            setLoading(false);
            setShow(true);
            setMessage({
                type: 'error',
                title: 'Invalid Data',
                message: 'Data provided is not correct, please check again.'
            });
            return false;
        }


        let statusCode, responseJson;

        if(user === 'Baker') {
            const body = {
                email,
                password,
            };
            fetch(`${BASE_URL}/baker/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => {
                statusCode = res.status;
                responseJson = res.json();
                return Promise.all([statusCode, responseJson]);
            })
            .then(res => {
                setLoading(false);
                statusCode = res[0];
                responseJson = res[1];

                
                if(statusCode === 200) {
                    props.setUser(responseJson.user);
                    props.setToken(responseJson.token);
                    props.history.push({pathname: '/admin/dashboard'});
                }

                if(statusCode === 401) {
                    setShow(true);
                    setMessage({
                        type: 'success',
                        title: 'Verification Error',
                        message: responseJson.message,
                    })
                }

                if(statusCode === 402) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Suspension Error',
                        message: responseJson.message,
                    })
                }

                if(statusCode === 422) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Details Conflict',
                        message: responseJson.message,
                    })
                }

                if(statusCode === 500) {
                    console.log(responseJson, '500');
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Unexpected Error',
                        message: responseJson.data[0].msg,
                    })
                }
            })
            .catch(err => {
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })
        } else {
            const body = {
                email,
                password,
            };

            fetch(`${BASE_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => {
                statusCode = res.status;
                responseJson = res.json();
                return Promise.all([statusCode, responseJson]);
            })
            .then(res => {
                setLoading(false);
                statusCode = res[0];
                responseJson = res[1];

                if(res[0] === 200) {
                    props.setUser(responseJson.user);
                    props.setToken(responseJson.token);
                    props.history.push({pathname: '/user/shop'});
                }

                if(statusCode === 401) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Authentication Error',
                        message: responseJson.message,
                    })
                }

                if(statusCode === 402) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Suspension Error',
                        message: responseJson.message,
                    })
                }

                if(statusCode === 422) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Details Conflict',
                        message: responseJson.message,
                    })
                }

                if(statusCode === 500) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Unexpected Error',
                        message: responseJson.message,
                    })
                }
            })
            .catch(err => {
                setLoading(false);
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: 'Please check your internet connection.'
                })
            })
        }

        
    }

    return (
        <section className={styles.secAuth} id="login">
        <div className={styles.login}>
            <div className={styles.loginForm}>
                <div className={styles.form}>
                    <Input 
                        placeholder="Email or ID Number(Baker)"
                        label="Email or ID Number"
                        len={3}
                        type="text"
                        value={email}
                        setValue={(event) => setEmail(event.target.value)}
                        error={emailError}
                        serError={() => setEmailError()}
                    />
                    <Input
                        placeholder="********"
                        label="Password"
                        len={4}
                        type="password"
                        value={password}
                        setValue={(event) => setPassword(event.target.value)}
                        error={passwordError}
                        serError={() => setPasswordError()}
                    />
                    <div className={styles.formGroup}>
                        <ButtonOne onClick={() => authenticate()} title="Login" loading={loading} />
                        <LinkOne link="/register" title="Register" />
                    </div>
                    <div className={styles.forgotContainer}>
                        <ButtonThree link="#" title="Forgot Password" />
                    </div>
                </div>
            </div>
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>
                    LOGIN
                </h2>
            </div>
        </div>
        <Notification message={message} show={show} setShow={setShow} />
</section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setUser, setToken}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginSection);
