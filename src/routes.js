import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Restaurant from './Components/Restaurant/Restaurant';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/restaurant/:id' component={Restaurant}/>
    </Switch>
)

