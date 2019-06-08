import React, {Component} from 'react'
import Header from '../Header/Header';
import axios from 'axios'
import Dishes from '../Dishes/Dishes'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getFavorites, toggleUpdated, toggleFavorite} from '../../redux/reducers/userReducer'


class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            dishes: []
        }
    }

componentDidMount=()=>{
    axios.get('/api/dishes')
    .then((res)=>{
        
        this.setState({
            dishes: res.data
        })
    })
    
  
}

componentDidUpdate=()=>{
    if(this.props.user_name && !this.props.updated){
        let {id}= this.props
        id= parseInt(id)
        axios.get(`/api/favorite/${id}`)
        .then((res)=>{
            this.props.getFavorites(res.data) && this.props.toggleUpdated()
           
           
           for(let i=0; i<this.props.favorites.length; i++){
               if(this.props.favorites[i].dish_id){
                   console.log('found favorite: ', this.props.favorites[i].dish_id)
                   return this.props.toggleFavorite()
               }
           }
           
        
        })
    }

}

//gets all dishes in database
getAll=()=>{
    axios.get('/api/dishes')
    .then((res)=>{
        
        this.setState({
            dishes: res.data
        })
    })
}

//passes in category from button selected and returns dishes that match selected category
getCategory = (category) => {
    
    axios.get(`/api/${category}`)
    .then(dishes => {
       
     this.setState({
         
      dishes: dishes.data
     })
    })
   }

    render(){
        
        const dishes= this.state.dishes.map((dish, i,j)=>{
            return(
              
                <Dishes key={i} dishName={dish.dish_name} imgUrl={dish.img_url} dishDesc={dish.dish_description} dishId={dish.dish_id}/>
               
            )
        })
        console.log(this.props)
        return(
            <>
            <Header/>
            <Div1>
                <Button onClick={()=>this.getAll()}>All</Button>
                <Button onClick={()=> this.getCategory('Burger')}>Burgers</Button>
                <Button onClick={()=> this.getCategory('Brunch')}>Brunch</Button>
                <Button>Mexican</Button>
                <Button>Pizza</Button>
                <Button>Sushi</Button>
                <Button>Happy Hour</Button>
                <Button>Healthy</Button>
                <Button>Pasta</Button>
                <Button>Dessert</Button>

                
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

export default connect(mapStateToProps, {getFavorites, toggleUpdated, toggleFavorite})(Dashboard)


const Div= styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Div1= styled.div`

width: 100%;
height: 36px;
display: flex;
overflow: auto;
vertical-align: top;
`
const Button =styled.button`
background: #DEDEDE;
border-radius: 20px;
width: 3em;


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

::webkit-scrollbar{display:none}
}
`

