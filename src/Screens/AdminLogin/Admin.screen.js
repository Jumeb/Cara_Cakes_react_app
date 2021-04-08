import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Notification } from '../../Components';
import { jbInc } from '../../res/img';
import { AuthMail } from '../../utils/auth';
import { BASE_URL } from '../../utils/globalVariable';

import {setUser, setToken} from '../../redux/Actions/Auth.actions'

import styles from './Admin.module.css'

const Admin = (props) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
    
    const authenticate = () => {
        let hasError = false;
        setLoading(true);
        console.log(email);
        if (!AuthMail(email)) {
            hasError = true;
            setEmailError(true);
        }

        if (password.length < 5) {
            hasError = true;
            setPasswordError(true);
        }

        if (hasError) {
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

        const body = {
            email,
            password,
        };

        fetch(`${BASE_URL}/admin/login`, {
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

                
                if (statusCode === 200) {
                    props.setUser(responseJson.user);
                    props.setToken(responseJson.token);
                    props.history.push({ pathname: '/admin/dashboard' });
                }

                if (statusCode === 401) {
                    setShow(true);
                    setMessage({
                        type: 'success',
                        title: 'Verification Error',
                        message: responseJson.message,
                    })
                }

                if (statusCode === 402) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Suspension Error',
                        message: responseJson.message,
                    })
                }

                if (statusCode === 422) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Details Conflict',
                        message: responseJson.message,
                    })
                }

                if (statusCode === 500) {
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



    return (
        <section className={styles.admin}>
            <div className={styles.adminBox}>
                <h2 className={styles.adminTitle}>Welcome Admin</h2>
                <div className={styles.adminContainer}>
                    <img src={jbInc} alt="Powered by Jb Inc" className={styles.adminLogo} />
                    <div className={styles.adminSignIn}>
                        <div className={styles.adminSignInSheet}>
                            <input type="text" className={styles.adminInput} id="email" name="emial" placeholder="bricejume@gmail.com" required onChange={(e) => setEmail(e.target.value)} /> 
                            <label htmlFor="email" className={styles.adminLabel}>Email</label>
                        </div>
                        <div className={styles.adminSignInSheet}>
                            <input type="password" className={styles.adminInput} id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                                required />
                            <label htmlFor="password" className={styles.adminLabel}>Password</label>
                        </div>
                        <button className={styles.adminBtn} onClick={() => authenticate()}>Login</button>
                    </div>
                </div>
            </div>
            <Notification setShow={setShow} show={show} message={message} />
        </section>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setUser, setToken }, dispatch);
};

export default connect(null, mapDispatchToProps)(Admin);
