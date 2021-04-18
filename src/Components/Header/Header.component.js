import React, { useState } from 'react';

import styles from './Header.module.css';
import {Links} from '../../Components';
import { HouseLogo } from '../../res/img';

const Header = (props) => {
    const [active, setActive] = useState(1)
    return (
        <div className={styles.container}>
            <img src={HouseLogo} alt="CaraCakes" className={styles.containerLogo} />
        </div>
    )
};
    
export default Header;
