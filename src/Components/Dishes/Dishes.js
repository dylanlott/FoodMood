import React from 'react'

import {Link} from 'react-router-dom'
import Restaurant from '../Restaurant/Restaurant';


const Dishes = (props)=>{
    
    return(
        <div>
            
            <img alt='img' src={props.imgUrl}/>
            <Link to='/restaurant'><h4>{props.dishName}</h4></Link>
            <p>{props.dishDesc}</p>
            <button>Favorite </button>
        </div>
    )
}

export default Dishes