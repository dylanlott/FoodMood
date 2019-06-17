import React, {Component} from 'react'
import Header from '../Header/Header';
import axios from 'axios'
import Dishes from '../Dishes/Dishes'
import styled, {keyframes} from 'styled-components'
import {connect} from 'react-redux'
import {getFavorites, toggleUpdated, toggleFavorite, changeLoading} from '../../redux/reducers/userReducer'


class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            dishes: []
        }
    }


//This function gets all the dishes in the users inputted city
componentDidMount=()=>{
    this.props.changeLoading()
    axios.get(`/api/dishes/${this.props.city}`)
    .then((res)=>{
        
        this.setState({
            dishes: res.data
        })
        this.props.changeLoading()
    })
    .catch(err=>{
        console.log(err)
        this.props.changeLoading()
    })
  
}

//This function sets the favorites on state once a user logs in.
componentDidUpdate=()=>{
    if(this.props.user_name && !this.props.updated){
       
        let {id}= this.props
        id= parseInt(id)
        axios.get(`/api/favorite/${id}`)
        .then((res)=>{
            this.props.getFavorites(res.data) && this.props.toggleUpdated()
           
        
        })
        .catch(err =>{
            console.log(err)
          
        })
    }

}

//gets all dishes in database that match users inputted city
getAll=()=>{
    axios.get(`/api/dishes/${this.props.city}`)
    .then((res)=>{
        
        this.setState({
            dishes: res.data
        })
    })
}

//passes in category from button selected and returns dishes that match selected category
getCategory = (category) => {
    
    axios.get(`/api/${this.props.city}/${category}`)
    .then(dishes => {
       
     this.setState({
         
      dishes: dishes.data
     })
    })
   }

    render(){
        
        const dishes= this.state.dishes.map((dish, i)=>{
            return(
              
                <Dishes key={i} dishName={dish.dish_name} imgUrl={dish.img_url} dishDesc={dish.dish_description} dishId={dish.dish_id}/>
               
            )
        })
        
        return(
            <>
            <Header/>
            <Div1>
                <Button onClick={()=>this.getAll()}>All</Button>
                <Button onClick={()=> this.getCategory('Burger')}>Burgers</Button>
                <Button onClick={()=> this.getCategory('Brunch')}>Brunch</Button>
                <Button onClick={()=> this.getCategory('Mexican')}>Mexican</Button>
                <Button onClick={()=> this.getCategory('Pizza')}>Pizza</Button>
                <Button onClick={()=> this.getCategory('Sushi')}>Sushi</Button>
                <Button>Happy Hour</Button>
                <Button>Healthy</Button>
                <Button>Pasta</Button>
                <Button onClick={()=> this.getCategory('Dessert')}>Dessert</Button>

                
            </Div1>
                <Div>
                {dishes}
                </Div>
            </>
        )
    }
}
const mapStateToProps=(reduxState)=>{
    return reduxState
}

export default connect(mapStateToProps, {getFavorites, toggleUpdated, toggleFavorite, changeLoading})(Dashboard)


const Div= styled.div`
display: flex;
flex-wrap: wrap;
margin-right: .5em;
margin-bottom: 1em;

@media(max-width:420px){
display: flex;
flex-direction: column;
align-items: center;
}
`
const Div1= styled.div`
width: 100%;
display: flex;
overflow: auto;
margin-top: 1em;

@media(max-width: 400px){
width: 100%;
height: 36px;
display: flex;
overflow: auto;
vertical-align: top;
}
`

const Button =styled.button`
background: #DEDEDE;
border-radius: 20px;
min-width: 7em;
margin-left: 2em;
height: 40px;
outline: none;
opacity: .5;
:hover {
    color: red;
}

@media(max-width:400px){
min-width: 7em;
height: 35px;
left: 201px;
top: 32px;
background: #DEDEDE;
border-radius: 16px;
opacity: .5;
margin-left: 1.3em;
display: flex;
justify-content: center;
}
`

