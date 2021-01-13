import React, { useState } from 'react';

import { Input } from '../../Components';
import RadioButton from '../../Components/RadioButtons/RadioButtons.component';
import { AuthMail, AuthTel } from '../../utils/auth';
import './Register.section.css'
import {BASE_URL} from '../../utils/globalVariable'

const RegisterSection = (props) => {
    const {
        name,
        email,
        tel,
        password,
        conPw,
        setName,
        setEmail,
        setTel,
        setPassword,
        setConPw,
        errorName,
        errorEmail,
        errorTel,
        errorPassword,
        errorConPw,
        setErrorName,
        setErrorEmail,
        setErrorTel,
        setErrorPassword,
        setErrorConPw,
        loading,
        setLoading,
    } = props;

    const [type, setType] = useState('');
    
    const next = () => {
        props.history.push({pathname: '/register/baker'});
    }
    
    let url = `${BASE_URL}/user/register`;

    const authenticate = () => {
        let hasError = false;
        setLoading(true);

        if (name.length < 5) {
            hasError = true;
            setErrorName(true);
        }

        if (!AuthMail(email)) {
            hasError = true;
            setErrorEmail(true);
        }

        if (!AuthTel(tel)) {
            hasError = true;
            setErrorTel(true);
        }

        if(password.length < 5) {
            hasError = true;
            setErrorPassword(true);
        }

        if (password !== conPw) {
            hasError = true;
            setErrorPassword(true);
            setErrorConPw(true);
        }

        if(!hasError) {
            setLoading(false)
            return false;
        }

        const body = {
            name,
            tel,
            email,
            password,
        }

        console.log(body);


        let statusCode, responseJson;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((response) => {
            statusCode = response.status;
            responseJson = response.json();
            return Promise.all([statusCode, responseJson]);
        })
        .then((res) => {
            statusCode = res[0];
            responseJson = res[1];
            setLoading(false);
            console.log(responseJson);
        })
        .catch(err => {
            console.log(err, 'The ultimate error');
            setLoading(false);
        })
    }

    return (
        <section className="sec-signup" id="signup">
            <div className="row-3">
                <div className="signup">
                    <div className="signup__form-1">
                        <form>
                            <Input 
                                len={1}
                                type='text'
                                placeholder="Jane Price"
                                label="Name"
                                value={name}
                                setValue={(event) => setName(event.target.value)}
                                error={errorName}
                                serError={() => setErrorName()}
                            />
                            <Input
                                len={2}
                                type="email"
                                placeholder="janeprice@gmail.com"
                                label="Email"
                                value={email}
                                setValue={(event) => setEmail(event.target.value)}
                                error={errorEmail}
                                serError={() => setErrorEmail()}
                             />
                             <Input
                                len={3}
                                type='number'
                                placeholder={681726633}
                                label="Telephone number"
                                value={tel}
                                setValue={(event) => setTel(event.target.value)}
                                error={errorTel}
                                serError={() => setErrorTel()}
                             />
                            <div className="form__group-2">
                                <RadioButton type="Client" setType={setType} />
                                <RadioButton type="Baker" setType={setType} />
                            </div>
                            {type === "Client" && (
                                <>
                                    <Input
                                        len={4}
                                        type="password"
                                        placeholder="********"
                                        label="Password"
                                        value={password}
                                        setValue={(event) => setPassword(event.target.value)}
                                        error={errorPassword}
                                        serError={() => setErrorPassword()}
                                    />
                                    <Input
                                        len={5}
                                        type="password"
                                        placeholder="********"
                                        label="Confirm password"
                                        value={conPw}
                                        setValue={(event) => setConPw(event.target.value)}
                                        error={errorConPw}
                                        serError={() => setErrorConPw()}
                                    />
                                </>
                            )}
                            <div className="form__group-2">
                                {type === "Client" && (
                                    <>
                                        <button href="/signup" className="btn btn-deep--pink">Login</button>
                                        <button className="btn btn-deep--pink" onClick={() => authenticate()}>Sign Up</button>
                                    </>
                                )}
                                {type === 'Baker' && (<button className="btn btn-deep--pink" onClick={() => next()}>Next</button>)}
                                
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
