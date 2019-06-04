import React, {Component} from 'react'
import Login from '../Login/Login'


class Header extends Component{
constructor(){
    super()
        this.state={
            moduleSeen: false,

        }
    
}

handleToggle=(e)=>{
  this.setState({
      moduleSeen: !this.state.moduleSeen
  })
}

    render(){
        return(
            <div>
            <h1>Header</h1>
            <button onClick={this.handleToggle}>login</button>


            {this.state.moduleSeen ? <Login handleToggle={this.handleToggle} /> : null}
            </div>
        )
    }
}

//have this subscribed to userReducer (mapStateToProps), display it via props when user logs in
export default Header