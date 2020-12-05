import React from 'react';
import { jbInc } from '../../res/img';

import './Admin.screen.css'

const Admin = (props) => {
    const {error} = props;
    return (
        <body className="admin__center back-admin">
            <div className="admin__box">
                <h2 className="title-lil-1 txt-white admin__left">Welcome Admin</h2>
                <div className="admin__box-pos">
                    <img src={jbInc} alt="Powered by Jb Inc" className="admin__logo" />
                { error &&(
                        <div className="admin__verify">Error</div>
                    )} 
                    <form action="/admin/signIn" className="admin__signin" method="POST">
                        <div className="admin__signin-sheet">
                            <input type="text" className="admin__input" id="user" name="user" placeholder="User Name" required />
                            <label for="user" className="admin__label">Username</label>
                        </div>
                        <div className="admin__signin-sheet">
                            <input type="password" className="admin__input" id="password" name="password" placeholder="Password"
                                required />
                            <label for="password" className="admin__label">Password</label>
                        </div>
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                        <button className="admin__btn" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </body>
    )
}

export default Admin;
