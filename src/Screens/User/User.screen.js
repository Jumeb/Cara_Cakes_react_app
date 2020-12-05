import React from 'react';

import './User.screen.css';
import {SideNav, UserSection} from '../../sections';

const User = () => {
    return (
        <body>
            <section className="panel">
                <SideNav />
                <UserSection />
            </section>
        </body>
    )
}

export default User;
