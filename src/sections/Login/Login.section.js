import React from 'react';

import styles from './Login.module.css'
import {LinkOne, ButtonThree, Input, ButtonOne} from '../../Components';

const LoginSection = (props) => {
    return (
        <section className={styles.secAuth} id="login">
        <div className={styles.login}>
            <div className={styles.loginForm}>
                <div className={styles.form}>
                    <Input 
                        placeholder="test@gmail.com"
                        label="Email"
                        len={3}
                        type="email"
                    />
                    <Input
                        placeholder="********"
                        label="Password"
                        len={4}
                        type="password"
                    />
                    <div className={styles.formGroup}>
                        <ButtonOne onClick={() => console.log('login')} title="Login" />
                        <LinkOne link="/register" title="Register" />
                    </div>
                    <div className={styles.forgotContainer}>
                        <ButtonThree link="#" title="Forgot Password" />
                    </div>
                </div>
            </div>
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>
                    LOGIN
                </h2>
            </div>
        </div>
</section>
    )
}

export default LoginSection;
