import React, {Component } from 'react'
import axios from 'axios';
import RegisterForm from './RegisterForm'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/reducers/userReducer'
import styled from 'styled-components'

class LoginForm extends Component{
    constructor() {
		super()
		this.state = {
			user_name: '',
            user_password: '',
            moduleSeen:false
		}
    }

    //this method closes the login module and opens the register module when a user clicks the create account button 
    handleToggle=(e)=>{
        this.props.registerToggle()
    }
    
    //this method keeps track of values inputted in input fields
    handleLoginInfoUpdate=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    //method that runs login method on authcontroller to login user, closes login module, and resets state which causes the site to conditionally render a new logged in view.
    handleUserLogin=(e)=>{
        e.preventDefault()
        const {user_name, user_password}= this.state
        axios.post('/auth/login', {user_name, user_password})
        .then((res)=>{
            
            
            this.props.updateUser(res.data)
            this.props.handleToggle()
        })
        .catch((err)=>{
            console.log(err)
        })
        this.setState({
            user_name:'',
            user_password:''
        })
       
        
    }



    render(){
        return(
            <Div>
                <h1>Log in to FoodMood</h1>
                <Form onSubmit={this.handleUserLogin}>
                    <Input type='text' name='user_name' placeholder='user name' onChange={this.handleLoginInfoUpdate}/>
                    <Input type='password' name='user_password' placeholder='password' onChange={this.handleLoginInfoUpdate}/>
                    <Button onClick={this.handleUserLogin}>Log In</Button>
                </Form>
                <p>Not a user? Create an account<Button onClick={this.handleToggle}>here</Button></p>
                {this.state.moduleSeen ? <RegisterForm /> :null}

            </Div>
        )
    }

}

export default connect(null, {updateUser})(LoginForm)

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
border-top: solid 3px #ed6c5c;

@media(max-width:1024px){
    height: 23vh;
}

@media(max-width:768px){
    height:30vh;
}

@media(max-width:414px){
position: fixed;
top: 10;
left:0;
height: 40vh;
width: 100vw;
background-color: white;
z-index: 999
}

@media(max-width:375px){
    height:45vh;
}
@media(max-width:320px){
    height: 51vh;
}

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
}
`

const Button= styled.button`
background:  #ed6c5c;
border-radius: 3px;
border: 2px solid #ed6c5c;
color: white;
margin: .5em .5em;
padding: 0.25em 1em;
height: 50%;
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