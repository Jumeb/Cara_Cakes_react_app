import React from 'react';

import { Header, NavBar } from '../../Components';
import { LoginSection } from '../../sections';
import styles from './Login.module.css';

const Login = (props) => {
    return (
        <body className={styles.Login}>
            <Header />
            <main>
                <LoginSection {...props} error={false}/>
            </main>
            <NavBar />
        </body>
    )
}

export default Login;
