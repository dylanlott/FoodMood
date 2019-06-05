import React, {Component} from 'react'
import Header from '../Header/Header';
import axios from 'axios'
import Dishes from '../Dishes/Dishes'
import Restaurant from '../Restaurant/Restaurant';


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

getCategory = (category) => {
    console.log(category)
    axios.get(`/api/${category}`)
    .then(dishes => {
        console.log(dishes.data)
     this.setState({
         
      dishes: dishes.data
     })
    })
   }

    render(){
        const dishes= this.state.dishes.map((dish, i,j)=>{
            return(
              
                <Dishes key={i} dishName={dish.dish_name} imgUrl={dish.img_url} dishDesc={dish.dish_description}/>
               
            )
        })
        return(
            <div>
                <Header/>
                <h1>Dashboard</h1>
                <button onClick={()=> this.getCategory('Burger')}>Burgers</button>
                <button onClick={()=> this.getCategory('Brunch')}>Brunch</button>
                {dishes}
            </div>
        )
    }
}

export default Dashboard