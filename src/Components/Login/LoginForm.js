import React, {Component } from 'react'
import axios from 'axios';



class LoginForm extends Component{
    constructor() {
		super()
		this.state = {
			user_name: '',
			user_password: ''
		}
    }
    
    handleLoginInfoUpdate=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleUserLogin=(e)=>{
        e.preventDefault()
        const {user_name, user_password}= this.state
        axios.post('/auth/login', {user_name, user_password})
        .then((res)=>{

        })
        .catch((err)=>{
            console.log(err)
        })
        e.target.user_name.value=''
        e.target.user_password.value=''
        
    }

    render(){
        return(
            <>
                <h1>Login</h1>
                <form onSubmit={this.handleUserLogin}>
                    <input type='text' name='user_name' placeholder='username' onChange={this.handleLoginInfoUpdate}/>
                    <input type='password' name='user_password' placeholder='password' onChange={this.handleLoginInfoUpdate}/>
                    <button>Log In</button>
                </form>
            </>
        )
    }

}

export default LoginForm
