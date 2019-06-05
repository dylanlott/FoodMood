import React, {Component} from 'react'
import Header from '../Header/Header';
import axios from 'axios'
import Dishes from '../Dishes/Dishes'
import styled from 'styled-components'


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

getAll=()=>{
    axios.get('/api/dishes')
    .then((res)=>{
        
        this.setState({
            dishes: res.data
        })
    })
}

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
        return(
            <>
                <Header/>
            <div>
                <Button onClick={()=>this.getAll()}>All</Button>
                <Button onClick={()=> this.getCategory('Burger')}>Burgers</Button>
                <Button onClick={()=> this.getCategory('Brunch')}>Brunch</Button>
                {dishes}
            </div>
            </>
        )
    }
}

export default Dashboard

const Button =styled.button`

width: 66px;
height: 29px;
left: 201px;
top: 32px;
color:
background: #DEDEDE;
border-radius: 20px;
opacity: .5;
`