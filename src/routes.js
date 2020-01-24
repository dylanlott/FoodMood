import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Restaurant from './Components/Restaurant/Restaurant';
import UserProfile from './Components/UserProfile/UserProfile';
import Search from './Components/Search/Search';
import Landing from './Components/Landing/Landing';

export default (
    <Switch>
        <Route exact path='/' component={Search}/>
        <Route exact path='/landing' component={Landing}/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/restaurant/:id' component={Restaurant}/>
        <Route path ='/user/:id' component={UserProfile} />
    </Switch>
)

