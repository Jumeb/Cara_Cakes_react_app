import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '..';
import { logo5, vals3 } from '../../res/img';
import styles from './BakerCard.module.css';
import {setBaker} from '../../redux/Actions/Auth.actions';
import { BASE_URL } from '../../utils/globalVariable';

const BakerCard = (props) => {
    const {isDetail, setIsDetail, baker, _setBaker,} = props;

    const showDetail = (baker) => {
        _setBaker(baker);
        setIsDetail(true);
    }

    const bakerShop = (bakerId) => {
        props.setBaker(bakerId);
        props.history.push({pathname: '/user/shop/pastries'})
    }

    return (
            <div className={styles.bakerListImgContainer}>
                <div className={styles.bakerListTitle}>
                    <h2>{baker.companyName}</h2>
                </div>
                <img src={baker.ceoImage ? `${BASE_URL}/${baker.ceoImage}` : vals3} alt={baker.name} className={styles.bakerListImg} />
                <div className={styles.bakerListImgLogoContainer}>
                    <img src={baker.companyImage ? `${BASE_URL}/${baker.companyImage}` : logo5} alt="Product" className={styles.bakerListImgLogo}/>
                </div>
                <div className={styles.bakersButtonContainer}>
                    <Button onClick={() => showDetail(baker)} title="Details" />
                    <Button onClick={() => bakerShop(baker._id)} title="Shop" />
                </div>
            </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setBaker}, dispatch);
}

export default connect(null, mapDispatchToProps)(BakerCard);
