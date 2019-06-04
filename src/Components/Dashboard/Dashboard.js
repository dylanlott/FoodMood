import React, {Component} from 'react'
import Header from '../Header/Header';
import axios from 'axios'
import Dishes from '../Dishes/Dishes'


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
        console.log(res.data)
        this.setState({
            dishes: res.data
        })
    })
}

    render(){
        const dishes= this.state.dishes.map((dish, i)=>{
            return(
                <Dishes key={i} dishName={dish.dish_name} imgUrl={dish.img_url} dishDesc={dish.dish_description}/>
            )
        })
        return(
            <div>
                <Header/>
                <h1>Dashboard</h1>
                {dishes}
            </div>
        )
    }
}

export default Dashboard