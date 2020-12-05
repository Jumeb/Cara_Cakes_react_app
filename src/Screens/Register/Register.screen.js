import React from 'react';
import { Header, NavBar } from '../../Components';
import { RegisterSection } from '../../sections';

import './Register.screen.css';

const Register = () => {
    return (
        <body className="back-signup">
            <Header />
            <main>
                <RegisterSection />
            </main>
            <NavBar />
        </body>
    )
}

export default Register;