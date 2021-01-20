import React, { useState } from 'react';

import styles from './Header.module.css';
import {Links} from '../../Components';
import logo from "../../res/img/caracakes2.png";

const Header = (props) => {
    const [active, setActive] = useState(1)
    return (
        <div className={styles.container}>
            <img src={logo} alt="CaraCakes" className={styles.containerLogo} />
        </div>
    )
};
    
export default Header;
