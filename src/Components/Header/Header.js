import React, {Component} from 'react'
import Login from '../Login/Login'


class Header extends Component{
constructor(){
    super()
        this.state={
            moduleSeen: false,

        }
    
}

    render(){
        return(
            <div>
            <h1>Header</h1>
            <form>

            </form>


            {this.state.moduleSeen ? <Login /> : null}
            </div>
        )
    }
}

export default Header