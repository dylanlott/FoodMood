import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeLoading} from '../../redux/reducers/userReducer'

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
        this.props.changeLoading()
        axios.get(`/api/favorite/${id}`)
        .then((res)=>{
           
            this.setState({
                favorites: res.data
            })
            this.props.changeLoading()
        })
        .catch((err)=>{
            console.log(err)
            this.props.changeLoading()
        })
        
    }


    render(){
        const favorites= this.state.favorites.map((favorite, i)=>{
            return(
            <DishName key={i}to={`/restaurant/${favorite.dish_id}`}>
                <div > 
            <Img alt='img' src={favorite.img_url}/>
            {/* <H4>{props.dishName}</H4> */}
            <Div>
            <P>{favorite.dish_description}</P>
            </Div>
            
            
        </div>
        </DishName>
            )
        })
        return(
            <>
                <h1>User Favorites</h1>
            <Div1>
                    {favorites}
            </Div1>
            </>
        )
    }
}

export default connect(null,{changeLoading})(Favorites) 

const Div1= styled.div`
display: flex;
flex-wrap: wrap;
margin-right: .5em;

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
height: 38vh;
width: 20vw;
border-radius: 6px;

@media(max-width:1024px){
    height: 20vh;
    width: 30vw;
    margin-left: 8em;
    margin-top: 3em;
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
margin-left:2em;

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
`
