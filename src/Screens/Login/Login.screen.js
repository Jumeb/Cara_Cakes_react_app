import React from 'react';

import { Header, NavBar } from '../../Components';
import { LoginSection } from '../../sections';
import './Login.screen.css';

const Login = () => {
    return (
        <body className="back-login">
            <Header />
            <main>
                <LoginSection error={false}/>
            </main>
            <NavBar />
        </body>
    )
}

export default Login;
