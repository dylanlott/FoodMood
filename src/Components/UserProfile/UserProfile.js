import React, {Component} from 'react'
import UpdateInfo from './UpdateInfo';
import Favorites from './Favorites';
import {connect} from 'react-redux';
import styled from 'styled-components'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

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
                <Header />
                <Div1>
                <Button1 to='/dashboard'>Back to Dishes</Button1>
                <H3>Hello {this.props.user_name}</H3>
                <Button onClick={this.handleUpdateInfoToggle}>Update Username</Button>
                </Div1>
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
background:  #ed6c5c;
border-radius: 3px;
border: 2px solid #ed6c5c;
color: white
margin: .5em .5em;
padding: 0.25em 1em;
height: 2em;
font-size: 14px;
display: flex;
align-items: center;

@media(max-width:420px){
    min-height: 3.3em;
    font-size: 12px;
}
`
const H3= styled.h3`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
color: black;
font-family: 'Noto Sans TC', sans-serif;
`

const Div= styled.div`
background-color: whitesmoke;
`

const Div1= styled.div`
display: flex;
justify-content: space-around;
align-items: center;

@media(max-width:420px){
    flex-direction: column;
}
`

const Button1= styled(Link)`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
background:  #ed6c5c;
border-radius: 3px;
border: 2px solid #ed6c5c;
color: white
margin: .5em .5em;
padding: 0.25em 1em;
display: flex;
align-items: center;
height: 1.2em;
text-decoration: none;
font-size: 14px;

@media(max-width:420px){
    height: 2em;
}
`