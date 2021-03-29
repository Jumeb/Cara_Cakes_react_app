import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Notification, UserDetails, UserTable } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './User.module.css';
import {setUsers} from '../../redux/Actions/Data.actions';

const Users = (props) => {
    const {user, token, refresh} = props;

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [_user, setUser] = useState([]);
    const [detail, setDetail] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`,
            }
        })
        .then(res => {
            const statusCode = res.status;
            const response = res.json();
            return Promise.all([statusCode, response]);
        })
        .then(res => {
            const statusCode = res[0];
            const response = res[1];

            if(statusCode === 200) {
                setUsers(response.users);
                props.setUsers(response.users);
                setTotal(response.totalItems);
            }

            if (statusCode === 404) {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: response.message,
                })
            }

            if(statusCode === 500) {
                setShow(true);
                setMessage({
                    type: 'error',
                    title: 'Unexpected Error',
                    message: response.message,
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
    }, [refresh]);

    return(
       <div className={styles.bakerSection}>
           <div className={styles.bakerLength}>
               <h2 className={styles.bakerLengthTitle}>{total} User{total !== 1 && 's'}</h2>
           </div>
           <div className={styles.bakerCat}>
               <button className={styles.bakerChoice}>All Users</button>
               <button className={styles.bakerChoice}>New Users</button>
               <button className={styles.bakerChoice}>Suspended</button>
               <button className={styles.bakerChoice}>Add User</button>
           </div>
            <UserTable users={users} token={token} setDetail={setDetail} setUser={setUser} />
            <UserDetails detail={detail} setDetail={setDetail} _user={_user} />
           <Notification show={show} setShow={setShow} message={message} />
       </div>
    )
}

const mapStateToProps = ({ auth, refresh }) => {
    return {
        user: auth.user,
        token: auth.token,
        refresh: refresh.refresh
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setUsers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);