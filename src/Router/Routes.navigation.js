import React from 'react';
import { Route, Switch } from 'react-router';

import {Home, Login, Register, Admin, User, AdminS} from '../Screens';

const Navigation = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/adminLogin' component={Admin} />
            <Route path='/user' component={User} />
            <Route path='/admin' exact component={AdminS} />
        </Switch>
    )
};

export default Navigation;
