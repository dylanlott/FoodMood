import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleFavorite,changeLoading} from '../../redux/reducers/userReducer'
import * as Icon from 'react-feather'
import './Restaurant.css'

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
           
            <Div>
                
                <Img src={dish.img_url} alt='dish'/>
                <h3>{dish.dish_name}</h3>
                <h4>{dish.dish_description}</h4>
                <P>{dish.rest_name}</P>
                <P>{dish.rest_address}</P>
                <P>{`${dish.rest_city} ${dish.rest_state} ${dish.rest_zip}`}</P>

                <Heart>
                {!this.props.favorited ?
               <> <Icon.Heart size={40} onClick={this.addToFavorites} /> </>
               
               
                : <Icon.Heart size={40} style={{color:'red'}} onClick={this.unFavorite}/>}
                </Heart>
            </Div>
            
        )
    }
}
const mapStateToProps=(reduxState)=>{
    return reduxState
}
export default connect(mapStateToProps, {toggleFavorite, changeLoading})(Restaurant)


const Div =styled.div`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;

background-color: whitesmoke;
border-bottom: solid rgb(200, 202, 206) 3px;
border-right: solid rgb(210, 210, 215) 3px;
width: 30%;
height: 80vh;
margin-left: 25em;
margin-top: 3em;

@media(max-width:1024px){
font-size: 32px;
height: 70vh;
margin-top: 3em;
width: 60%;
margin-left: 6.5em;
border-radius: 6px;
}

@media(max-width:1022px){
    height:90%;
}


@media(max-width:768px){
    width: 60%;
    margin-left: 6.5em;
    margin-top: 3em;
    font-size: 25px;
}
@media(max-width:414px){
    width:85%;
    height: 90%;
    margin-left:1.9em;
    margin-top: 2em;
    font-size: 18px;
}
@media(max-width:375px){
    margin-top: 1.5em;
    margin-left: 1.9em;
    font-size: 18px;
    height: 100%;
   
}

@media(max-width:360px){
    height:95%;
    width:85%;
    margin-top: 1.5em;
    margin-left: 1.6em;
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
margin-bottom: 13px;


@media(max-width:414px){
    margin-bottom: 15px;
}


`

