import React from 'react';

import './Register.section.css'

const RegisterSection = () => {
    return (
        <section className="sec-signup" id="signup">
    <div className="row-3">
        <div className="signup">
            <div className="signup__form-1">
                <form action="/signup" className="form" method="POST" novalidate>
                    <div className="form__group-2">
                        <input 
                        type="text" 
                        className="form__input form__length-1" 
                        name="name" id="Name" 
                        placeholder="Name" required />
                        <label for="Name" className="form__label">Name</label>
                    </div>
                    <div className="form__group-2">
                        <input 
                            className="form__input form__length-2"
                            type="email"
                            name="email" 
                            id="Email"
                            placeholder="Email" required />
                        <label for="Email" className="form__label">Email</label>
                    </div>
                    <div className="form__group-2">
                        <input
                            className="form__input form__length-3" 
                            type="number"
                            name="telNo" id="Tel"
                            placeholder="Telephone No" required />
                        <label for="Tel" className="form__label">Telephone No</label>
                    </div>
                    <div className="form__group-2">
                        <input 
                            className="form__input form__length-4"
                            type="password"
                            name="password" id="password"
                            placeholder="Password" required />
                        <label for="password" className="form__label">Password</label>
                        <p className="txt-red pAuth">Password length most be greater than 5</p>
                    </div>
                    <div className="form__group-2">
                        <input 
                            className="form__input form__length-5"
                            type="password" 
                            name="confirmPassword"
                            id="conPassword"
                            placeholder="Confirm password" required />
                        <label for="con" className="form__label">Confirm password</label>
                        <p className="txt-red pAuth">Password Mismatch</p>
                    </div>
                    <div className="form__group-2">
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                        <button type="submit" className="btn btn-deep--pink">Sign Up</button>
                        <a href="/signup" className="btn btn-deep--pink">signup</a>
                    </div>
                </form>
            </div>
            <div className="signup__form-2 txt-cnt">
                <h2 className="title-lil-1 txt-white-2">
                    Sign up
                </h2>
            </div>
        </div>
    </div>
</section>
    )
}

export default RegisterSection;
