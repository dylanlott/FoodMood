import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {toggleFavorite} from '../../redux/reducers/userReducer'

class Restaurant extends Component{

constructor(){
    super()
    this.state={
        dish:{},
        
    }
}


//Returns associated dish and restaurant information for dish selected
componentDidMount(){
    
    const {id}= this.props.match.params
    axios.get(`/api/restaurant/${id}`)
    .then(res =>{
        this.setState({
            dish: res.data
            
        })
    })
}

//adds dish to users favorites table
addToFavorites=(e)=>{
   console.log('here')
    
   axios.post('/api/favorite', {user_id: this.props.id, dish: this.state.dish.dish_id} )
   .then((res)=>{
       console.log('Added to favorites')
       this.props.toggleFavorite()
   })
   .catch(()=>{
       window.alert('Please login to favorite items')
   })
}

unFavorite=(e)=>{
    axios.delete(`/api/favorite/${this.props.id}?dish=${this.state.dish.dish_id}` )
    .then((res)=>{
        this.props.toggleFavorite()
    })
}


render(){
        
        const {dish}= this.state
        return(
            <Div>
                
                <Img src={dish.img_url} alt='dish'/>
                <h3>{dish.dish_name}</h3>
                <h4>{dish.dish_description}</h4>
                <p>{dish.rest_name}</p>
                <p>{dish.rest_address}</p>
                <p>{`${dish.rest_city} ${dish.rest_state} ${dish.rest_zip}`}</p>
                {!this.props.favorited ?
                <button onClick={this.addToFavorites}> 
                Favorite </button>
                : <button onClick={this.unFavorite}>Unfavorite</button>}
            </Div>
        )
    }
}
const mapStateToProps=(reduxState)=>{
    return reduxState
}
export default connect(mapStateToProps, {toggleFavorite})(Restaurant)

const Div =styled.div`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
border: solid lightgray 2px;
background-color: whitesmoke;
border: solid lightgray 2px;
height: 80%;
margin-top: 3em;
width: 90%;
margin-left: 1.5em;
border-radius: 6px;
`

const Img =styled.img`
width: 100%;

`