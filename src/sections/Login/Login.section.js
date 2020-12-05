import React from 'react';

import './Login.section.css'

const LoginSection = (props) => {
    const {error} = props;

    return (
        <section className="sec-auth" id="login">
            {error && (

            <div className="flash">
    <div className="flash__message flash__message-danger">Erro</div>
</div>
            )}
    <div className="row-2">
        <div className="login">
            <div className="login__form-1">
                <form action="/login" className="form" method="POST">
                    <div className="form__group">
                        <input type="email" className="form__input form__length-3" name="email" id="Email" placeholder="Email or Tel" required />
                        <label for="Email" className="form__label">Email or Tel</label>
                    </div>
                    <div className="form__group">
                        <input type="password" className="form__input form__length-4" name="password" id="passWord" placeholder="Password"
                             required />
                        <label for="passWord" className="form__label">Password</label>
                    </div>
                    <div className="form__group">
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                        <button type="submit" className="btn btn-deep--pink">Login</button>
                        <a href="/signup" className="btn btn-deep--pink">Sign-up</a>
                    </div>
                    <div className="form__group margin-bottom-small-ve">
                        <a href="#" className="btn-3">Forgot password</a>
                    </div>
                </form>
            </div>
            <div className="login__form-2 txt-cnt">
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
