import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddPastry, EditPastry } from '..';
import { Notification, PastryDetail, PastryTable } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './Pastry.module.css';
import {setPastries} from '../../redux/Actions/Data.actions';

const Pastry = (props) => {
    const { token, user, _pastries, refresh } = props;
    const [active, setActive] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pastries, setPastries] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState(false);
    const [pastry, setPastry] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/bakerpastries/${user._id.toString()}?page=${page}`, {
            method: 'GET',
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
                    console.log(response.pastries);
                    setPastries(response.pastries.reverse());
                    props.setPastries(response.pastries.reverse());
                    setActive(-1);
                }

                if (statusCode === 500) {
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
    }, [isOpen, refresh]);

    const setFilter = (index, type) => {
        setActive(index);

        if (type !== 'all') {
            let Pastries = _pastries.filter(data => data.type === type);
            setPastries(Pastries);
        }
        if (type === 'all') {
            setPastries(_pastries);
        }
    }

    return (
        <div className={styles.bakerSection}>
            <div className={styles.bakerLength}>
                <h2 className={styles.bakerLengthTitle}>{pastries.length} {(pastries.length === 0 || pastries.length > 1) ? 'Pastries' : 'Pastry'}</h2>
            </div>
            <div className={styles.bakerScroll}>
                <div className={styles.bakerCat}>
                    <button className={[styles.bakerChoice, active === -1 && styles.bakerActive].join(' ')} onClick={() => setFilter(-1, 'all')}>All Pastries</button>
                    {user.categories.map((category, index) => <button className={[styles.bakerChoice, active === index && styles.bakerActive].join(' ')} onClick={() => setFilter(index, category)}>{category}</button>)}
                    <button className={styles.bakerChoice} onClick={() => setIsOpen(true)}>Add Pastry</button>
                </div>
            </div>
            <PastryTable pastries={pastries} setDetail={setDetail} setPastry={setPastry} />
            <AddPastry isOpen={isOpen} setIsOpen={setIsOpen} />
            <EditPastry isOpen={isEdit} setIsOpen={setIsEdit} pastry={pastry} />
            <PastryDetail setDetail={setDetail} detail={detail} pastry={pastry} setIsEdit={setIsEdit} />
            <Notification message={message} show={show} setShow={setShow} />
        </div>
    )
};

const mapStateToProps = ({ auth, data, refresh }) => {
    return {
        token: auth.token,
        user: auth.user,
        _pastries: data.pastries,
        refresh: refresh.refresh,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pastry);