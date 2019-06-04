import React, {Component} from 'react'
import Login from '../Login/Login'


class Header extends Component{
constructor(){
    super()
        this.state={
            moduleSeen: false,

        }
    
}

handleLogin=(e)=>{
  this.setState({
      moduleSeen: true
  })
}

    render(){
        return(
            <div>
            <h1>Header</h1>
            <button onClick={this.handleLogin}>login</button>


            {this.state.moduleSeen ? <Login /> : null}
            </div>
        )
    }
}

export default Header