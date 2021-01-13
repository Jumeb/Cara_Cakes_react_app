import React, { useState } from 'react';
import { Route, Switch } from 'react-router';

import { Header, NavBar } from '../../Components';
import { BakerDetails, RegisterSection } from '../../sections';

import './Register.screen.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [conPw, setConPw] = useState('');
    const [idCard, setIdCard] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [categories, setCategories] = useState([]);
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorTel, setErrorTel] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConPw, setErrorConPw] = useState(false);
    const [errorIdCard, setErrorIdCard] = useState(false);
    const [errorCompanyName, setErrorCompanyName] = useState(false);
    const [errorCategories, setErrorCategories] = useState([]);
    const [loading, setLoading] = useState(false);


    return (
        <body className="back-signup">
            <Header />
            <main>
                <Route path="/register" exact render={(props) => (<RegisterSection 
                    {...props} 
                    name={name}
                    email={email}
                    tel={tel}
                    password={password}
                    conPw={conPw}
                    setName={setName}
                    setEmail={setEmail}
                    setTel={setTel}
                    setPassword={setPassword}
                    setConPw={setConPw}
                    errorName={errorName}
                    errorEmail={errorEmail}
                    errorTel={errorTel}
                    errorPassword={errorPassword}
                    errorConPw={errorConPw}
                    setErrorName={setErrorName}
                    setErrorEmail={setErrorEmail}
                    setErrorTel={setErrorTel}
                    setErrorPassword={setErrorPassword}
                    setErrorConPw={setErrorConPw}
                    loading={loading}
                    setLoading={setLoading}
                 /> )} />
                <Route path="/register/baker" render={(props) => (<BakerDetails
                    {...props}
                    name={name}
                    email={email}
                    tel={tel}
                    password={password}
                    conPw={conPw}
                    idCard={idCard}
                    categories={categories}
                    companyName={companyName}
                    setName={setName}
                    setEmail={setEmail}
                    setTel={setTel}
                    setPassword={setPassword}
                    setConPw={setConPw}
                    setIdCard={setIdCard}
                    setCategories={setCategories}
                    setCompanyName={setCompanyName}
                    errorName={errorName}
                    errorEmail={errorEmail}
                    errorTel={errorTel}
                    errorPassword={errorPassword}
                    errorConPw={errorConPw}
                    errorIdCard={errorIdCard}
                    errorCategories={errorCategories}
                    errorCompanyName={errorCompanyName}
                    setErrorName={setErrorName}
                    setErrorEmail={setErrorEmail}
                    setErrorTel={setErrorTel}
                    setErrorPassword={setErrorPassword}
                    setErrorConPw={setErrorConPw}
                    setErrorIdCard={setErrorIdCard}
                    setErrorCategories={setErrorCategories}
                    setErrorCompanyName={setErrorCompanyName}
                    loading={loading}
                    setLoading={setLoading}
                 />)} />
            </main>
            <NavBar />
        </body>
    )
}

export default Register;