import React, {Component} from 'react'
import axios from 'axios'

class Favorites extends Component{

    constructor(){
        super()
        this.state={
            favorites:[]
        }
    }

    componentDidMount=()=>{
        
        let {id}= this.props
        id= parseInt(id)
        axios.get(`/api/favorite/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({
                favorites: res.data
            })
        })
        
    }


    render(){
        const favorites= this.state.favorites.map((favorite, i)=>{
            return(
                <div> 
            <img alt='img' src={favorite.img_url}/>
            {/* <H4>{props.dishName}</H4> */}
            <p>{favorite.dish_description}</p>
            
        </div>
            )
        })
        return(
            <div>
                <h1>User Favorites</h1>
                    {favorites}
            </div>
        )
    }
}

export default Favorites 