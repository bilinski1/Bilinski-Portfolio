import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './about';
import Project from './projects';
import Form from './form';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={About}></Route>
        <Route path='/projects' component={Project}></Route>
        <Route path='/form' component={Form}></Route>
    </Switch>
)

export default Routes;