import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

class RegisterForm extends Component{


    render(){
        return(
            <>
            <h1>register</h1>
            <Form>
                <Input type='text' name='user_name' placeholder='username'/>
                <Input type='text' name='user_email' placeholder='email' />
                <Input type='password' name='user_password' placeholder='password'/>
            </Form>
            <Button>Create Account</Button>
            </>
        )
    }
}

export default RegisterForm

const Form= styled.form`
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
margin: .5em .5em;
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

`