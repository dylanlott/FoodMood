import React from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components'
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
height: 38vh;
width: 20vw;
border-radius: 6px;


@media(max-width:1024px){
    height: 20vh;
}

@media(max-width:770px){
height: 25vh;
width: 35vw;
border-radius: 6px;
margin-top: 1em;
margin-left: 5em;
}


@media(max-width:420px){
height: 30%;
width: 85%;
border-radius: 6px;
margin-top: 1em;
margin-left:0;

}
`

const Div= styled.div`
display: flex;
align-content: center;
justify-content: center;
height: 5em;



@media(max-width:400px){
    height:3em;
}
`
const Img =styled.img`
width: 101%;
height: 10em;
border-radius: 6px;

@media(max-width:420px){
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

@media(max-width:400px){
margin: 0 0;
padding: .5em;
display: flex;
justify-content: center;
align-items: center;
}
`
const Button= styled.button`
margin-bottom: 1em;
`

