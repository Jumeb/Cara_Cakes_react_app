import React from 'react';
import { LinkOne } from '../../Components';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header} id="home">
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>
                    <span className={styles.mainTitle}>Cara Cakes</span>
                    <span className={styles.subTitle}>Resting place for flavours</span>
                </h1>
                <LinkOne link="/signup" title="Register" animate="left" />
                <LinkOne link="/login" title="Login"  animate="right" />
            </div>
        </header>
    );
}

export default Header;