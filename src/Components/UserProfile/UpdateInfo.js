import React, {Component} from 'react'
import axios from 'axios'


class UpdateInfo extends Component{
    constructor(){
        super()
        this.state={
            user_name: ''
        }
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const{user_name}= this.state
        axios.put('/api/user', {user_name})
        .then((res)=>{
            console.log(res.data)
        })
    }


    hanldeInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
           
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='input new username' name='user_name' onChange={this.hanldeInput}></input>
                    <button>Update Username</button>
                </form>
           
        )
    }
}

export default UpdateInfo