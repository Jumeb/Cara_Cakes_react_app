import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import {
    Home, 
    Login, 
    Register, 
    Admin, 
    User, 
    AdminS
} from '../Screens';

const Navigation = ({user, token}) => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/admin' exact component={Admin} />
            <Route path='/user' component={User} />
            {(token && user.hasOwnProperty('name')) && <Route path='/admin/dashboard' component={AdminS} />}
        </Switch>
    )
};

const mapStateToProps = ({ auth }) => {
    return {
        token: auth.token,
        user: auth.user,
    }
}

export default connect(mapStateToProps)(Navigation);
