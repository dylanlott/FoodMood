import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Restaurant from './Components/Restaurant/Restaurant';
import UserProfile from './Components/UserProfile/UserProfile';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/restaurant/:id' component={Restaurant}/>
        <Route path ='/user/:id' component={UserProfile} />
    </Switch>
)

