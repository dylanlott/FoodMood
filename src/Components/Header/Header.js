import React, {Component} from 'react'
import Login from '../Login/Login'
import RegisterForm from '../Login/RegisterForm';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {logoutUser} from '../../redux/reducers/userReducer'

class Header extends Component{
constructor(){
    super()
        this.state={
            loginModuleSeen: false,
            registerModuleSeen:false,
        }
    
}

handleLoginToggle=(e)=>{
    if(this.state.registerModuleSeen === true){
        this.setState({
            registerModuleSeen: false,
        })
    }
  this.setState({
      loginModuleSeen: !this.state.loginModuleSeen
  })
}
handleRegisterToggle=(e)=>{
    if(this.state.loginModuleSeen === true){
        this.setState({
            loginModuleSeen: false,
        })
    }
    this.setState({
        registerModuleSeen: !this.state.registerModuleSeen,
    
    })
}

handleLogout=(e)=>{
    axios.get('/auth/logout')
    .then(()=>{
        this.props.logoutUser()
    })
    .catch((err)=>{
        console.log(err)
    })
}

    render(){
        console.log(this.props)
        return(
            <>
            <Div>
            <H1>FoodMood</H1>

            {!this.props.user_name 
            ? (<><Button onClick={this.handleLoginToggle}>login</Button>
            <Button onClick={this.handleRegisterToggle}>register</Button></>) 
            :(<><Link to={`/user/${this.props.id}`}><H3>{this.props.user_name}</H3></Link>
                <Button onClick={this.handleLogout}>Logout</Button></>)}
            


            </Div>
            {this.state.loginModuleSeen ? <Login handleToggle={this.handleLoginToggle} /> : null}
            {this.state.registerModuleSeen? <RegisterForm /> : null}
            </>
        )
    }
}

//have this subscribed to userReducer (mapStateToProps), display it via props when user logs in
const mapStateToProps= reduxState =>{
    return reduxState
}

export default connect(mapStateToProps, {logoutUser})(Header)

const Button= styled.button`
background: palegreen;
border-radius: 3px;
border: 2px solid palegreen;
color: white;
margin: 0 .5em;
padding: 0.25em 1em;
height: 50%;

`
const Div= styled.div`
background: whitesmoke;
width: 100vw;
display: flex;
align-items: center;
`

const H1= styled.h1`
margin-left: 15px;
margin-right: 30px;
`

const H3= styled.h3`
color: black;
text-decoration: none;
`