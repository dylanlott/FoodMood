import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
            <Div>
                
                <Img src={dish.img_url} alt='dish'/>
                <h3>{dish.dish_name}</h3>
                <h4>{dish.dish_description}</h4>
                <p>{dish.rest_name}</p>
                <p>{dish.rest_address}</p>
                <p>{`${dish.rest_city} ${dish.rest_state} ${dish.rest_zip}`}</p>
            </Div>
        )
    }
}
export default Restaurant

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