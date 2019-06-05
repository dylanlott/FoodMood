import React from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Dishes = (props)=>{
    console.log(props.dishId)
    return(
        <DishName to={`/restaurant/${props.dishId}`}>
        <div>
            
            <img alt='img' src={props.imgUrl}/>
            <h4>{props.dishName}</h4>
            <p>{props.dishDesc}</p>
            <button>Favorite </button>
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

`

