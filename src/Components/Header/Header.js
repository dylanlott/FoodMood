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
       
        return(
            <>
            <Div>
            <Logo to='/'><H1>FoodMood</H1></Logo>

            {!this.props.user_name 
            ? (<Div1><Button onClick={this.handleLoginToggle}>login</Button>
            <Button onClick={this.handleRegisterToggle}>register</Button></Div1>) 
            :(<><Link to={`/user/${this.props.id}`}><H3>{this.props.user_name}</H3></Link>
                <Button onClick={this.handleLogout}>Logout</Button></>)}
            


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
color: black;
text-decoration: none;

@media(max-width:320px){
    font-size: .7em;
    margin-right: 0;
}
`
const Button= styled.button`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
background: #d0e6a5;
border-radius: 3px;
border: 2px solid #c5df16;
color: white;
margin: 0 .5em;
padding: 0.25em 1em;
height: 50%;

@media(max-width:320px){
    width: 44%;
    margin-right: 0;
}

`
const Div= styled.div`
display:flex;
align-items: center;
justify-content: space-between;

@media(max-width:400px){
background: whitesmoke;
width: 100vw;
display: flex;


}
`
const Div1= styled.div`
@media(max-width:400px){
    background: whitesmoke;
    width: 100vw;
    display: flex;
`    


const H1= styled.h1`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
margin-left: 15px;
margin-right: 30px;
`

const H3= styled.h3`
color: black;
text-decoration: none;
margin-right: 10px;
`