import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityTwo, Language, Notification, PastryDetail, PastryTableSuper, Profile, SearchBar } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import styles from './Pastry.module.css';
import {setPastries} from '../../redux/Actions/Data.actions';
import search from '../../utils/search';

const Pastry = (props) => {
    const { token, user, pastry } = props;
    const [active, setActive] = useState(-1);
    const [page, setPage] = useState(1);
    const [pastries, setPastries] = useState([]);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState(false);
    const [_pastry, setPastry] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/superpastries?page=${page}`, {
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
                setLoading(false);

                if (statusCode === 200) {
                    console.log(response.pastries);
                    setPastries(response.pastries.reverse());
                    props.setPastries(response.pastries.reverse());
                    setActive(-1);
                    setTotal(response.totalItems);
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
    }, []);

    const setFilter = (index, type) => {
        setActive(index);

        if (type !== 'all') {
            let _pastries = pastry.filter(data => data.type === type);
            setPastries(_pastries);
        }
        if (type === 'all') {
            console.log(pastry);
            setPastries(pastry);
        }
    }

    useEffect(() => {
        if (text.length > 0) {
            setActive(-1);
        }
        search(text, pastry, setPastries, 'name');
    }, [text]);

    return (
        <div className={styles.bakerContainer}>
            <div className={styles.bakerSection}>
                <div className={styles.bakerLength}>
                    <h2 className={styles.bakerLengthTitle}>{pastries.length} {(pastries.length === 0 || pastries.length > 1) ? 'Pastries' : 'Pastry'}</h2>
                </div>
                <div className={styles.bakerScroll}>
                    <div className={styles.bakerCat}>
                        <button className={[styles.bakerChoice, active === -1 && styles.bakerActive].join(' ')} onClick={() => setFilter(-1, 'all')}>All Pastries</button>
                        <button className={[styles.bakerChoice, active === 0 && styles.bakerActive].join(' ')} onClick={() => setFilter(0, 'Birthday Cakes')}>Birthday Cakes</button>
                        <button className={[styles.bakerChoice, active === 1 && styles.bakerActive].join(' ')} onClick={() => setFilter(1, 'Wedding Cakes')}>Wedding Cakes</button>
                        <button className={[styles.bakerChoice, active === 2 && styles.bakerActive].join(' ')} onClick={() => setFilter(2, 'Cookies')}>Cookies</button>
                        <button className={[styles.bakerChoice, active === 3 && styles.bakerActive].join(' ')} onClick={() => setFilter(3, 'Doughnuts')}>Dougnuts</button>
                        <button className={[styles.bakerChoice, active === 4 && styles.bakerActive].join(' ')} onClick={() => setFilter(4, 'Pancakes')}>Pancakes</button>
                        <button className={[styles.bakerChoice, active === 5 && styles.bakerActive].join(' ')} onClick={() => setFilter(5, 'Cup Cakes')}>Cup Cakes</button>
                        <button className={[styles.bakerChoice, active === 6 && styles.bakerActive].join(' ')} onClick={() => setFilter(6, 'Pizzas')}>Pizzas</button>
                        <button className={[styles.bakerChoice, active === 7 && styles.bakerActive].join(' ')} onClick={() => setFilter(7, 'Pies')}>Pies</button>
                        <button className={[styles.bakerChoice, active === 8 && styles.bakerActive].join(' ')} onClick={() => setFilter(8, 'Gift Baskets')}>Gift Baskets</button>
                        <button className={[styles.bakerChoice, active === 9 && styles.bakerActive].join(' ')} onClick={() => setFilter(9, 'Valentines')}>Valentines</button>
                    </div>
                </div>
                {loading ? <div className={styles.activity}>
                    <ActivityTwo />
                </div> : <PastryTableSuper pastries={pastries} setDetail={setDetail} setPastry={setPastry} />}
                <PastryDetail setDetail={setDetail} detail={detail} pastry={_pastry} />
                <Notification message={message} show={show} setShow={setShow} />
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