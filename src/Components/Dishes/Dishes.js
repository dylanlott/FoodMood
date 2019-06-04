import React from 'react'

const Dishes = (props)=>{
    return(
        <div>
            <img alt='img' src={props.imgUrl}/>
            <h4>{props.dishName}</h4>
            <p>{props.dishDesc}</p>
        </div>
    )
}

export default Dishes