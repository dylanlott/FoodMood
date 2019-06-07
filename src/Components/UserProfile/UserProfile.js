import React, {Component} from 'react'
import UpdateInfo from './UpdateInfo';
import Favorites from './Favorites';
import {connect} from 'react-redux';
import styled from 'styled-components'


class UserProfile extends Component{
constructor(){
    super()
        this.state={
            updateInfoSeen:false
        }
}

handleUpdateInfoToggle=(e)=>{
    this.setState({
        updateInfoSeen: !this.state.updateInfoSeen
    })
}


    render(){
        return(
            <div>
                <h1>UserProfile</h1>
                <h3>Hello {this.props.user_name}</h3>
                <Button onClick={this.handleUpdateInfoToggle}>Update Username</Button>
                {this.state.updateInfoSeen 
                ? <UpdateInfo updateInfoSeen={this.updateInfoSeen} />
                : null}
                
                <Favorites />
            </div>

        )
    }
}

const mapStateToProps= reduxState=>{
    return reduxState
}
export default connect(mapStateToProps)(UserProfile)


const Button= styled.button`
background: palegreen;
border-radius: 3px;
border: 2px solid palegreen;
color: white;
margin: .5em .5em;
padding: 0.25em 1em;
height: 2em;
`
