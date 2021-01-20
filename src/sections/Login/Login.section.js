import React from 'react';

import styles from './Login.module.css'

const LoginSection = (props) => {
    const {error} = props;

    return (
        <section className="sec-auth" id="login">
    <div className="row-2">
        <div className="login">
            <div className="loginForm-1">
                <form action="/login" className="form" method="POST">
                    <div className="formGroup">
                        <input type="email" className="formInput formLength-3" name="email" id="Email" placeholder="Email or Tel" required />
                        <label for="Email" className="formLabel">Email or Tel</label>
                    </div>
                    <div className="formGroup">
                        <input type="password" className="formInput formLength-4" name="password" id="passWord" placeholder="Password"
                             required />
                        <label for="passWord" className="formLabel">Password</label>
                    </div>
                    <div className="formGroup">
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                        <button type="submit" className="btn btn-deep--pink">Login</button>
                        <a href="/signup" className="btn btn-deep--pink">Sign-up</a>
                    </div>
                    <div className="formGroup margin-bottom-small-ve">
                        <a href="#" className="btn-3">Forgot password</a>
                    </div>
                </form>
            </div>
            <div className="loginForm-2 txt-cnt">
                <h2 className="title-lil-1 txt-white">
                    LOGIN
                </h2>
            </div>
        </div>
    </div>
</section>
    )
}

export default LoginSection;
