import React, {Component} from 'react'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getCity} from '../../redux/reducers/userReducer'

class Search extends Component{
constructor(){
    super()
    this.state={
        city: ''
    }
}

handleInput=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}




    render(){
        console.log(this.state)
        return(
            
            <>
                <Header />
                <Div>
                <h4>Find food, for any mood!</h4>
                <Form>
                    <Input type='text' name='city' placeholder='Enter city name' onChange={this.handleInput}></Input>
                    <Link to='/dashboard'><Button onClick={()=>this.props.getCity(this.state.city)}>Search</Button></Link>
                </Form>
                </Div>
                <ParentDiv>
                <Div1>
                <>
                    <h4>1: Input your city</h4>
                    <p>Search for dishes in your city</p>
                </>
                <>
                    <h4>2: Filter by category/FoodMood</h4>
                    <p> See all dishes or dishes for a specific category of food </p>
                </>
                <>
                    <h4>3:Get restaurant information for the dish that stands out to you!</h4>
                    <p>See the dish name and corresponding restaurant address for the dish you're in the mood for</p>
                </>
                </Div1>
                </ParentDiv>

            </>

        )
    }
}

export default connect(null,{getCity})(Search)

const Div = styled.div`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
width: 100%;
background: linear-gradient(to top right, rgb(174, 249, 232), rgb(246, 247, 239));
height: 25vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Form = styled.form`
margin-bottom: 3em;
display: flex;
justify-content: space-around;
`
const Input =styled.input`
width: 60%;
border-radius: 6px;
height: 2em;
padding-left: 15%;

`
const Button= styled.button`

background: #d0e6a5;
border-radius: 3px;
border: 2px solid #c5df16;
color: white;
margin: 0 .5em;
padding: 0.25em 1em;
height: 100%;
`
const ParentDiv= styled.div`
width: 100%;
display: flex;
justify-content: center;

`
const Div1= styled.div`
width: 80%;
display: flex;
flex-direction: column;
`