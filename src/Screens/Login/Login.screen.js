import React from 'react';

import { Header, NavBar } from '../../Components';
import { LoginSection } from '../../sections';
import styles from './Login.module.css';

const Login = (props) => {
    return (
        <div className={styles.Login}>
            <Header />
            <main>
                <LoginSection {...props} error={false}/>
            </main>
            <NavBar />
        </div>
    )
}

export default Login;
