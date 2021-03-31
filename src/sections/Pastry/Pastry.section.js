import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddPastry } from '..';
import { Notification, PastryTable } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './Pastry.module.css';
import {setPastries} from '../../redux/Actions/Data.actions';

const Pastry = (props) => {
    const {token, user, pastry} = props;
    const [active, setActive] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pastries, setPastries] = useState([]);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

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

            if(statusCode === 200) {
                console.log(response.pastries);
                setPastries(response.pastries.reverse());
                props.setPastries(response.pastries.reverse());
                setActive(-1);
                setTotal(response.totalItems);
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
    }, [isOpen]);

    const setFilter = (index, type) => {
        setActive(index);

        if (type !== 'all') {
            let _pastries = pastry.filter(data => data.type === type);
            setPastries(_pastries);
        }
        if (type === 'all') {
            setPastries(pastry);
        }
    }

    return(
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
           <PastryTable pastries={pastries} />
           <AddPastry  isOpen={isOpen} setIsOpen={setIsOpen} />
           <Notification message={message} show={show} setShow={setShow} />
       </div>
    )
}

const mapStateToProps = ({auth, data}) => {
    return {
        token: auth.token,
        user: auth.user,
        pastry: data.pastries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pastry);