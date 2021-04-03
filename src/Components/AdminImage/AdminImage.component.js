import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Notification, SquareImage } from '..';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './AdminImage.module.css';
import { setRefresh } from '../../redux/Actions/Refresh.actions';
import { cups1, vals3 } from '../../res/img';
import { setUser } from '../../redux/Actions/Auth.actions';

const AdminImage = (props) => {
    const {isOpen, setIsOpen, user, token} = props;

    const [logo, setLogo] = useState('');
    const [image, setImage] = useState('');
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);

    const Close = () => {
        setIsOpen(false);
    }

    const stopClose = (e) => {
        e.stopPropagation();
    }

    useEffect(() => {
        return () => {

        }
    }, [])

    const Save = (id) => {
        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('logo', logo[0]);

        fetch(`${BASE_URL}/baker/images/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${token}`
            },
            body: formData,
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1];

            if (statusCode === 200) {
                setShow(true);
                props.setUser(response.baker);
                setMessage({
                    type: 'success',
                    message: `Mr/Miss ${user.name}, your profile has been updated.`,
                    title: 'Success'
                });
                setTimeout(() => {
                    setIsOpen(false);
                 }, 2000);
            }

            if (statusCode === 500) {
                console.log('error');
                setIsOpen(false);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className={isOpen ? styles.notifyBackdrop : styles.notifyNoBackdrop} onClick={() => Close()}>
            <div className={[styles.notifyContainer, isOpen ? styles.showContainer : styles.hideContainer].join(' ')} onClick={(e) => stopClose(e)}>
                <button className={styles.closeButton} onClick={() => Close()}><IoClose /></button>
                <div className={styles.profileInfo}>
                    <div className={styles.profileBoard}>
                        <img src={image ? URL.createObjectURL(image[0]) : user.ceoImage ? `${BASE_URL}/${user.ceoImage}` : cups1} alt={'Username'} className={styles.profileImg} />
                        <img src={logo ? URL.createObjectURL(logo[0]) : user.companyImage ? `${BASE_URL}/${user.companyImage}` :vals3} alt={'Username'} className={styles.profileLogo} />
                    </div>
                </div>
                <div className={styles.sqrButtons}>
                    <SquareImage
                        label={'Upload Image'}
                        type='file'
                        setValue={event => setImage(event.target.files) }
                    />
                    <SquareImage
                        label={'Upload Logo'}
                        type='file'
                        setValue={event => setLogo(event.target.files) }
                    />
                    <Button title="Save" onClick={() => Save(user._id)} />
                </div>
            </div>
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user,
        token: auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setRefresh, setUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminImage);