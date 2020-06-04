import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error404 from '../pages/404';
import Home from '../pages/Home';
import User from '../pages/User';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:username/:reponame?" exact component={User} />
            <Route component={Error404} />
        </Switch>
    );
}
