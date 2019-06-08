import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {updateUser} from './../../redux/reducers/userReducer'

class RegisterForm extends Component{
    constructor(){
        super()
        this.state={
            user_name: '',
            user_password: '',
            user_email: ''
        }
    }

handleInput=(e)=>{
    this.setState({
    [e.target.name]: e.target.value
    })
}

registerUser=(e)=>{
   const {user_name, user_password, user_email}= this.state
    axios.post('/auth/register', {user_name, user_password, user_email})
    .then((res)=>{
        this.props.updateUser(res.data)
        this.props.registerToggle()
    })
}
    render(){
        return(
            <Div>
            <h1>Register</h1>
            <Form>
                <Input type='text' name='user_name' placeholder='username' onChange={this.handleInput}/>
                <Input type='text' name='user_email' placeholder='email' onChange={this.handleInput}/>
                <Input type='password' name='user_password' placeholder='password'onChange={this.handleInput}/>
            </Form>
            <Button onClick={this.registerUser}>Create Account</Button>
            </Div>
        )
    }
}



export default connect(null, {updateUser}) (RegisterForm)
const Div= styled.div`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');

font-family: 'Noto Sans TC', sans-serif;
position: fixed;
top: 3;
right: 0;
background-color: white;
z-index: 999;
height: 50vh;
width: 50vw;
border-bottom: solid 3px rgb(222, 225, 229);
border-left: solid 3px rgb(222, 225, 229);

@media(max-width:400px){
position: fixed;
top: 10;
left:0;
height: 40vh;
width: 100vw;
background-color: white;
z-index: 999
border-bottom: solid 3px rgb(222, 225, 229);
border-top: solid 3px rgb(222, 225, 229);
`

const Form= styled.form`
display: flex;
flex-direction: column;
align-items: center;

@media(max-width:400px){

display: flex;
flex-direction: column;
width: 100vw;
align-items: center;

`

const Button= styled.button`
background: palegreen;
border-radius: 3px;
border: 2px solid palegreen;
color: white;
margin: 3em .5em;
padding: 0.25em 1em;
height: 2em;
`

const Input= styled.input`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
margin: 5px;
width: 50%;
border-radius: 6px;
border: none;
border-bottom: 1px solid lightgray;
font-size: 20px;
padding-left: 25%;

`