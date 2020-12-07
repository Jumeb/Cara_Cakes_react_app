import React from 'react';

import './User.screen.css';
import {SideNav, Cart, Bakers} from '../../sections';
import { WorkArea } from '../../Components';

const User = () => {
    return (
        <body>
            <section className="panel">
                <SideNav />
                <WorkArea>
                    <Bakers />
                </WorkArea>
            </section>
        </body>
    )
}

export default User;
