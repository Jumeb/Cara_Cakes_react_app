import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { Button, Notification, SquareInput } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './EditPassword.module.css';


const EditPassword = (props) => {
    const {isOpen, setIsOpen, user, token, type} = props;
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [conNewPass, setConNewPass] = useState('');
    const [oldPassError, setOldPassError] = useState(false);
    const [newPassError, setNewPassError] = useState(false);
    const [conNewPassError, setConNewPassError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setOldPass('');
        setNewPass('');
        setConNewPass('');
    }, [isOpen]);

    useEffect(() => {
        return () => {
            setOldPass('');
            setNewPass('');
            setConNewPass('');
        }
    }, []);
    
    const authenticate = () => {
        let hasError = false;
        setLoading(true);

        if (oldPass.length < 5) {
            setOldPassError(true);
            hasError = true;
        }

        if (conNewPass.length < 5 || newPass.length < 5 || conNewPass !== newPass) {
            setConNewPassError(true);
            setNewPassError(true);
            hasError = true;
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

        const body = {
            oldPassword: oldPass,
            newPassword: newPass,
        }

        console.log(body);

        let url = `${BASE_URL}/${type}/changepassword/${user._id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        .then(res => {
            const statusCode = res.status;
            const responseJson = res.json();
            return Promise.all([statusCode, responseJson]);
        })
        .then(res => {
            setLoading(false);
            const statusCode = res[0];
            const response = res[1];

            console.log(response, 'response');

            if (statusCode === 200) {
                setShow(true);
                setMessage({
                    type: 'success',
                    title: 'Success',
                    message: `Password has been updated`
                });

                setTimeout(() => {
                    setIsOpen(false);
                }, 3000);
            }

            if (statusCode === 401) {
                    setShow(true);
                    setMessage({
                        type: 'error',
                        title: 'Unexpected Error',
                        message: response.data[0].msg,
                    })
            }

            if (statusCode === 422) {
                console.log(response, '422');
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Authentication Error',
                    message: response.message,
                })
            }

            if(statusCode === 500) {
                console.log(response, '500');
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: response.message,
                })
            }
        })
        .catch(err => {
                console.log(err);
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
        <>
            <Modal isOpen={isOpen} closeTimeoutMS={400} className={styles.secAddPastry} overlayClassName={styles.secAddPastry}>
                <div className={styles.addPastryForm}>
                    <h2 className={styles.formTitle}>Edit Password</h2>
                    <SquareInput
                        placeholder="Old Password"
                        type="text"
                        label="Old Password"
                        value={oldPass}
                        setValue={(event) => setOldPass(event.target.value)}
                        error={oldPassError}
                        setError={() => setOldPassError}
                    />
                    <SquareInput 
                        placeholder="New Password"
                        type="text"
                        label="New Password"
                        value={newPass}
                        setValue={(event) => setNewPass(event.target.value)}
                        error={newPassError}
                        setError={() => setNewPassError}
                    />
                    <SquareInput
                        placeholder="Confirm new password"
                        type="text"
                        label="Confirm New Password"
                        value={conNewPass}
                        setValue={(event) => setConNewPass(event.target.value)}
                        error={conNewPassError}
                        setError={() => setConNewPassError}
                    />
                    <div className={styles.addButtons}>
                        <Button onClick={() => authenticate()} title="Save Changes" loading={loading} />
                        <Button onClick={() => setIsOpen(false)} title="Cancel"  />
                    </div>
                </div>
            </Modal>
            <Notification message={message} show={show} setShow={setShow} />
        </>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.token,
        user: auth.user,
    }
}

export default connect(mapStateToProps)(EditPassword);
