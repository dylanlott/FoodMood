import React, {Component} from 'react'
import axios from 'axios'

class Restaurant extends Component{

constructor(){
    super()
    this.state={
        dish:{},
        
    }
}

componentDidMount(){
    
    const {id}= this.props.match.params
    axios.get(`/api/restaurant/${id}`)
    .then(res =>{
        this.setState({
            dish: res.data
            
        })
    })
}
    render(){
        console.log(this.state.dish)
        const {dish}= this.state
        return(
            <div>
                <h1>Restaurant</h1>
                <img src={dish.img_url} alt='dish'/>
                <h3>{dish.dish_name}</h3>
                <h4>{dish.dish_description}</h4>
                <p>{dish.rest_name}</p>
                <p>{dish.rest_address}</p>
                <p>{`${dish.rest_city} ${dish.rest_state} ${dish.rest_zip}`}</p>
            </div>
        )
    }
}
export default Restaurant