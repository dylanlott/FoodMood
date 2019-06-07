import React, {Component} from 'react'
import UpdateInfo from './UpdateInfo';
import Favorites from './Favorites';


class UserProfile extends Component{



    render(){
        return(
            <div>
                <h1>UserProfile</h1>
                <UpdateInfo />
                <Favorites />
            </div>

        )
    }
}

export default UserProfile