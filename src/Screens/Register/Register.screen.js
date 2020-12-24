import React from 'react';
import { Header, NavBar } from '../../Components';
import { RegisterSection } from '../../sections';
import BakerDetails from '../../sections/Register/BakerDetails/BakerDetails.section';

import './Register.screen.css';

const Register = () => {
    return (
        <body className="back-signup">
            <Header />
            <main>
                <BakerDetails />
            </main>
            <NavBar />
        </body>
    )
}

export default Register;