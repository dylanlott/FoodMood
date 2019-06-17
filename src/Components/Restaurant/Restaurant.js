import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleFavorite,changeLoading} from '../../redux/reducers/userReducer'
import * as Icon from 'react-feather'
import './Restaurant.css'
import Header from '../Header/Header';
import {Link} from 'react-router-dom'

class Restaurant extends Component{

constructor(){
    super()
    this.state={
        dish:{},
        
    }
}


//Returns associated dish and restaurant information for dish selected
componentDidMount=async()=>{
    const {id}= this.props.match.params
    this.props.changeLoading()
    await axios.get(`/api/restaurant/${id}`)
    .then(res =>{
    
        
        this.setState({
            dish: res.data
            
        })
        this.props.changeLoading()
    })
    .catch(err =>{
        console.log(err)
        this.props.changeLoading()
    })
    


    const foundFavorite= this.props.favorites.findIndex(element => element.dish_id === this.state.dish.dish_id)
    
    if(foundFavorite !== -1){
        this.props.toggleFavorite({favorited: true})
    }
    else{
        this.props.toggleFavorite({favorited: false})
    }

    
}

//adds dish to users favorites table
addToFavorites=(e)=>{
  
    
   axios.post('/api/favorite', {user_id: this.props.id, dish: this.state.dish.dish_id} )
   .then((res)=>{
       this.props.favorites.push(this.state.dish)
       this.props.toggleFavorite({favorited:true})
   })
   .catch(()=>{
       window.alert('Please login to favorite items')
   })
}

unFavorite=(e)=>{
    axios.delete(`/api/favorite/${this.props.id}?dish=${this.state.dish.dish_id}` )
    .then((res)=>{
        const deletedFavorite= this.props.favorites.findIndex(element => element.dish_id=== this.state.dish.dish_id)

        if(deletedFavorite !== -1){
        this.props.favorites.splice(deletedFavorite, 1)
        this.props.toggleFavorite({favorited:false})
        }
    })

  
}


render(){
        
        const {dish}= this.state
       
        return(
            <>
            <Header />
            <Div1>
            <div>
            <Back to='/dashboard'><Button> Back to dishes</Button></Back>
            </div>
            <Div>
                
                <Img src={dish.img_url} alt='dish'/>
                <H3>{dish.dish_name}</H3>
                <H4>{dish.dish_description}</H4>
                <P>{dish.rest_name}</P>
                <P>{dish.rest_address}</P>
                <P>{`${dish.rest_city} ${dish.rest_state} ${dish.rest_zip}`}</P>

                <Heart>
                {!this.props.favorited ?
               <> <Icon.Heart size={40} onClick={this.addToFavorites} /> 
               {!this.props.updated ? 
               <P>Please login to favorite items</P>
                :
                null}
               </>
               
               
                : <Icon.Heart size={40} style={{color:'red'}} onClick={this.unFavorite}/>}
                </Heart>
            </Div>
            </Div1>
            </>
        )
    }
}
const mapStateToProps=(reduxState)=>{
    return reduxState
}
export default connect(mapStateToProps, {toggleFavorite, changeLoading})(Restaurant)

const Div1=styled.div`
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
height: 80vh;
width: 100vw;
margin-top: 0;

@media(max-width:320px){
    height: 90vh;
    margin: 1.5em, 0;
}
`

const Div =styled.div`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;

background-color: whitesmoke;
border-bottom: solid rgb(200, 202, 206) 3px;
border-right: solid rgb(210, 210, 215) 3px;
width: 25%;
height: 70vh;
margin-top: 1em;

@media(max-width:1024px){
font-size: 32px;
height: 70vh;
width: 60%;

border-radius: 6px;
}

@media(max-width:1022px){
    height:90%;
}


@media(max-width:768px){
    width: 60%;
    font-size: 25px;
}
@media(max-width:414px){
    width:85%;
    height: 90%;
    font-size: 18px;
}
@media(max-width:375px){
    font-size: 18px;
    height: 100%; 
}

@media(max-width:360px){
    height:95%;
    width:85%;
}
`

const Img =styled.img`
width: 101%;
height: 40%;
border-radius: 6px;

@media(max-width:1024px){
    width: 100.5%;
}

`

const P= styled.p`
margin-top: 0;
margin-bottom: 0;

`
const Heart= styled.div`
margin-top: 25px;
margin-bottom: 0;


@media(max-width:414px){
    margin-bottom: 15px;
}


`

const Button= styled.button`
background:  #ed6c5c;
border-radius: 3px;
border: 2px solid #ed6c5c;
color: white;
margin-top: 1em;
padding: 0.25em 1em;
height: 3em;
:hover{
    background: white;
    color: black;
    border: 2px solid #ed6c5c;
}


`
const Back= styled(Link)`
text-decoration: none;
color: white;

:hover{
    color: black;
}
`
const H4= styled.h4`
margin: 0;
`
const H3= styled.h3`
margin: 0;
`