import React, { useState } from 'react';

import BakerList from './BakerList/Baker.list';
import styles from './Baker.module.css'
import { BakerDetails } from '../../../Components';

const BakerSection = (props) => {
    
    const [isDetail, setIsDetail] = useState(false);
    const [baker, setBaker] = useState([]);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [follow, setFollow] = useState(0);
    return (
        <div className={styles.bakers}>
            <BakerList isDetail={isDetail} setIsDetail={setIsDetail} setBaker={setBaker} _baker={baker} setDislikes={setDislikes} setLikes={setLikes} setFollow={setFollow} {...props} />
            <BakerDetails detail={isDetail} setDetail={setIsDetail} baker={baker} dislike={dislikes} like={likes} follow={follow} {...props} />
        </div>
    )
}

export default BakerSection;
