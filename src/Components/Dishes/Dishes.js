import React from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Dishes = (props)=>{
   
    return(
        <DishName to={`/restaurant/${props.dishId}`}>
        <div> 
            <Img alt='img' src={props.imgUrl}/>
            {/* <H4>{props.dishName}</H4> */}
            <P>{props.dishDesc}</P>
            {/* <Button>Favorite </Button> */}
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
border: solid lightgray 2px;


@media(max-width:400px){
height: 40%;
width: 90%;
border-radius: 6px;
margin-top: 1em;
}
`
const Img =styled.img`
width: 100%;
height: 14em;
`

const H4= styled.h4`
margin: 0 0;
`
const P= styled.p`
margin: 0 0;
`
const Button= styled.button`
margin-bottom: 1em;
`

