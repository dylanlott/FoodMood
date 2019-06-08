import React, {Component} from 'react'
import UpdateInfo from './UpdateInfo';
import Favorites from './Favorites';
import {connect} from 'react-redux';
import styled from 'styled-components'
import Header from '../Header/Header'


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
            <Div>
                <h1>UserProfile</h1>
                <Header />
                <H3>Hello {this.props.user_name}</H3>
                <Button onClick={this.handleUpdateInfoToggle}>Update Username</Button>
                {this.state.updateInfoSeen 
                ? <UpdateInfo updateInfoSeen={this.updateInfoSeen} />
                : null}
                
                <Favorites id={this.props.id} />
            </Div>

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
const H3= styled.h3`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
color: black;
font-family: 'Noto Sans TC', sans-serif;
`

const Div= styled.div`
background-color: whitesmoke;
`