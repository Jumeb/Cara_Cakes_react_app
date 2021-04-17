import React from 'react';
import { LinkOne } from '../../Components';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header} id="home">
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>
                    <span className={styles.mainTitle}>House of Flavours</span>
                    <span className={styles.subTitle}>Resting place for flavours</span>
                </h1>
                <div className={styles.actionContainer}>
                    <LinkOne link="/register" title="Register" animate="left" />
                    <LinkOne link="/login" title="Login"  animate="right" />
                </div>
            </div>
        </header>
    );
}

export default Header;