import React from 'react'

import {Link} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import {device} from '../Style/Style'
import {connect} from 'react-redux'
import axios from 'axios'

const Dishes = (props)=>{

    return(
        <DishName to={`/restaurant/${props.dishId}`}>
        <div> 
            <Img alt='img' src={props.imgUrl}/>
            {/* <H4>{props.dishName}</H4> */}
            <Div>
            <P>{props.dishDesc}</P>
            </Div>
            
        </div>
        </DishName>
    )
}


export default Dishes
const pulse = keyframes`
    0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    }
    100% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
    }
  
    
`

const DishName= styled(Link)`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
color: black;
text-decoration: none;
font-family: 'Noto Sans TC', sans-serif;
background-color: whitesmoke;
border-bottom: solid rgb(200, 202, 206) 3px;
border-right: solid rgb(210, 210, 215) 3px;
margin-top: 1.5em;
margin-left: 3em;
height: 40vh;
width: 20vw;
border-radius: 6px;
:hover{
    animation: ${pulse} .8s forwards;
}


@media ${device.laptop}{
    height: 20vh;
    width: 30vw;
    margin-left: 8em;
    margin-top: 3em;
}

@media ${device.tablet}{
height: 25vh;
width: 35vw;
border-radius: 6px;
margin-top: 1em;
margin-left: 5em;
}


@media ${device.mobileL} {
height: 30%;
width: 85%;
border-radius: 6px;
margin-top: 1em;
margin-left:0;

}
@media ${device.mobileS}{
    height: 50vh;
}

`

const Div= styled.div`
display: flex;
align-content: center;
justify-content: center;
height: 5em;



@media ${device.mobileL} {
    height: 3em;
}
`
const Img =styled.img`
width: 101%;
height: 10em;
border-radius: 6px;

@media ${device.mobileL} {
width: 101%;
height: 12em;
border-radius: 6px;
}
`

const H4= styled.h4`
margin: 0 0;
`
const P= styled.p`

padding: 0em;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1em;

@media ${device.mobileL} {
margin: 0 0;
padding: .5em;
display: flex;
justify-content: center;
align-items: center;
}

@media ${device.mobileS} {
    margin-top: 1.6em;

}
`


