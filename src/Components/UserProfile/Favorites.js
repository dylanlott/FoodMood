import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
                <Div key={i}> 
                <DishName to={`/restaurant/${favorite.dish_id}`}>
            <Img alt='img' src={favorite.img_url}/>
            {/* <H4>{props.dishName}</H4> */}
            <P>{favorite.dish_description}</P>
            
            
        </DishName>
        </Div>
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

const Div= styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const DishName= styled(Link)`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
color: black;
text-decoration: none;
font-family: 'Noto Sans TC', sans-serif;
background-color: whitesmoke;
border-bottom: solid rgb(200, 202, 206) 3px;
border-right: solid rgb(210, 210, 215) 3px;


@media(max-width:400px){
height: 35%;
width: 80%;
border-radius: 6px;
margin-top: 1em;

}
`
const Img =styled.img`
width: 101%;
height: 14em;
border-radius: 6px;
`

const H4= styled.h4`
margin: 0 0;
`
const P= styled.p`
margin: 0 0;
padding: .5em;
`
