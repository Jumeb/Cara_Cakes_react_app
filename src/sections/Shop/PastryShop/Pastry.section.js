import React, { useState } from 'react';

import { PastryDetail, PastryDetailV2 } from '../../../Components';
import styles from './Pastry.module.css'
import PastryList from './PastryList/Pastry.list';

const PastrySection = (props) => {
    const [pastry, setPastry] = useState([])
    const [isDetail, setIsDetail] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    return (
        <div className={styles.pastries}>
            <PastryList isDetail={isDetail} setIsDetail={setIsDetail} setPastry={setPastry} setDislikes={setDislikes} setLikes={setLikes} {...props} />
            <PastryDetailV2 detail={isDetail} setDetail={setIsDetail} pastry={pastry} dislike={dislikes} like={likes} />
        </div>
    )
}

export default PastrySection;
