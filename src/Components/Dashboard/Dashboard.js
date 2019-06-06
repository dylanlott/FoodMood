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
            <Div1>
                <Button onClick={()=>this.getAll()}>All</Button>
                <Button onClick={()=> this.getCategory('Burger')}>Burgers</Button>
                <Button onClick={()=> this.getCategory('Brunch')}>Brunch</Button>
                <Button>Test</Button>
                <Button>Test</Button>
                <Button>Test</Button>
                <Button>Test</Button>
                
            </Div1>
                <Div>
                {dishes}
                </Div>
            </>
        )
    }
}

export default Dashboard


const Div= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Div1= styled.div`
width: 100%;
height: 30px;
display: flex;
overflow: auto;
`
const Button =styled.button`
background: #DEDEDE;
border-radius: 20px;

@media(max-width:400px){
width: 64px;
height: 29px;
left: 201px;
top: 32px;

background: #DEDEDE;
border-radius: 16px;
opacity: .5;
margin: 0 .5em;
::webkit-scrollbar{display:none}
}
`