import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Language, Notification, Profile, SearchBar, UserDetails, UserTable } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './User.module.css';
import {setUsers} from '../../redux/Actions/Data.actions';
import search from '../../utils/search';

const Users = (props) => {
    const { user, token, refresh, _users } = props;

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [_user, setUser] = useState([]);
    const [detail, setDetail] = useState(false);
    const [active, setActive] = useState(0);
    const [text, setText] = useState('');

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

                if (statusCode === 200) {
                    setUsers(response.users);
                    props.setUsers(response.users);
                    setActive(0);
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

                if (statusCode === 500) {
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

    const setFilter = (index, type) => {
        setActive(index);

        if (type === 'Suspended') {
            let _user = _users.filter(data => !data.suspend);
            setUsers(_user);
        }
        if (type === 'Unsuspended') {
            let _user = _users.filter(data => data.suspend);
            setUsers(_user);
        }
        if (type === 'all') {
            setUsers(_users);
        }
    }

    useEffect(() => {
        if (text.length > 0) {
            setActive(0);
        }
        search(text, _users, setUsers, 'name');
    }, [text]);

    return (
        <div className={styles.bakerContainer}>
            <div className={styles.bakerSection}>
                <div className={styles.bakerLength}>
                    <h2 className={styles.bakerLengthTitle}>{total} User{total !== 1 && 's'}</h2>
                </div>
                <div className={styles.bakerScroll}>
                    <div className={styles.bakerCat}>
                        <button className={[styles.bakerChoice, active === 0 && styles.bakerActive].join(' ')} onClick={() => setFilter(0, 'all')}>All Users</button>
                        <button className={[styles.bakerChoice, active === 1 && styles.bakerActive].join(' ')} onClick={() => setFilter(1, 'Suspended')}>Not Suspended</button>
                        <button className={[styles.bakerChoice, active === 2 && styles.bakerActive].join(' ')} onClick={() => setFilter(2, 'Unsuspended')}>Suspended</button>
                        <button className={[styles.bakerChoice, active === 3 && styles.bakerActive].join(' ')} onClick={() => setFilter(3, 'all')}>Add User</button>
                    </div>
                </div>
                <UserTable users={users} token={token} setDetail={setDetail} setUser={setUser} />
                <UserDetails detail={detail} setDetail={setDetail} _user={_user} />
                <Notification show={show} setShow={setShow} message={message} />
            </div>
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar setText={setText} />
                    <Language />
                    <Profile />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({ auth, refresh, data }) => {
    return {
        user: auth.user,
        token: auth.token,
        refresh: refresh.refresh,
        _users: data.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setUsers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);