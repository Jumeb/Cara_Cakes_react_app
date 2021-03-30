import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './Sample.module.css';
import { SampleCard } from '../../Components';
import { BASE_URL } from '../../utils/globalVariable';
import { setPastries } from '../../redux/Actions/Data.actions';

const Sample = (props) => {

    const [active, setActive] = useState(-1);
    const [page, setPage] = useState(1);
    const [pastries, setPastries] = useState([]);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
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

            if(statusCode === 200) {
                console.log(response.pastries);
                setPastries(response.pastries.reverse());
                props.setPastries(response.pastries.reverse());
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
    }, []);

    return (
        <section className={styles.secSample} id="sec-sample flvs">
                <h2 className={styles.secTitle} id="flvs">
                    Feel the flavour with every bite
                </h2>
            <div className={styles.sampleRow}>
                <div className={styles.secSide}>
                    <SampleCard pastry={pastries[Math.floor(Math.random() * (pastries.length - 1))]} index={1} />
                </div>
                <div className={styles.secSide}>
                    <SampleCard pastry={pastries[Math.floor(Math.random() * (pastries.length - 1))]} index={2} />
                </div>
                <div className={styles.secSide}>
                    <SampleCard pastry={pastries[Math.floor(Math.random() * (pastries.length - 1))]} index={3} />
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPastries}, dispatch);
}

export default connect(null, mapDispatchToProps)(Sample);