import React, {Component} from 'react'
import Login from '../Login/Login'
import RegisterForm from '../Login/RegisterForm';
import styled, {keyframes} from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {logoutUser} from '../../redux/reducers/userReducer'
import * as Icon from 'react-feather'

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
       
        return(
            <>
            <Div>
            <Logo to='/'><H1>FoodMood</H1></Logo>

            {!this.props.user_name 
            ? (<Div1><Button onClick={this.handleLoginToggle}>Login</Button>
            <Button onClick={this.handleRegisterToggle}>Register</Button></Div1>) 
            :(<Div2><H3 to={`/user/${this.props.id}`}><Span><Icon.User style={{color:'white'}} /></Span>{this.props.user_name}</H3>
                <Button onClick={this.handleLogout}><Logout to='/'>Logout </Logout></Button></Div2>)}
            


            </Div>
            {this.state.loginModuleSeen ? <Login handleToggle={this.handleLoginToggle} registerToggle={this.handleRegisterToggle} /> : null}
            {this.state.registerModuleSeen? <RegisterForm registerToggle={this.handleRegisterToggle}/> : null}
            </>
        )
    }
}

//have this subscribed to userReducer (mapStateToProps), display it via props when user logs in
const mapStateToProps= reduxState =>{
    return reduxState
}

export default connect(mapStateToProps, {logoutUser})(Header)


const Logo=styled(Link)`
color: whitesmoke;
text-decoration: none;

@media(max-width:320px){
    font-size: .7em;
    margin-right: 0;
}
`
const Logout=styled(Link)`
text-decoration: none;
color: black;
`
const Button= styled.button`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
background: whitesmoke;
border-radius: 3px;
border: 2px solid #ed6c5c;
color: black;
margin: 0 .5em;
padding: 0.25em 1em;
height: 50%;
:hover {
    color: red;
  }

@media(max-width:320px){
    width: 44%;
    margin-right: 0;
}
`
const Div= styled.div`
display:flex;
align-items: center;
justify-content: space-between;
border-bottom: solid #ed6c5c 3px;
background-color: #fa897b;
max-width: 100%;

@media(max-width:400px){
width: 100%;
display: flex;
}
`
const Div1= styled.div`
@media(max-width:400px){
    width: 100vw;
    display: flex;
`  

const Div2= styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width:768px){
    margin-right: .8em;
}
@media(max-width:320px){
    margin-right: .8em;
}
`


const H1= styled.h1`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
margin-left: 15px;
margin-right: 30px;

@media(max-width:360px){
    margin-right:15px; 
}
`

const H3= styled(Link)`
color: white;
text-decoration: none;
margin-right: 10px;
font-size: 20px;
display: flex;
align-items: center;

@media(max-width:420px){
    font-size: 15px;
}
`

const Span= styled.span`
margin-right: 5px;
`