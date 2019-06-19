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
        value: 'Salt Lake City'
    }
}

// handleInput=(e)=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
// }
handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

    render(){
       
        return(
            <>
            <Header />
            <Div2>
                <Div>
                <H2>Find food, for any mood!</H2>
                <Form>
                    {/* <Input type='text' name='city' placeholder='Enter city name' onChange={this.handleInput}></Input> */} 
                    {/* {/* <Link to='/dashboard'><Button onClick={()=>this.props.getCity(this.state.city)}>Search</Button></Link> */}
                    <Label>
                        
                        <Select value={this.state.value} onChange={this.handleChange}>
                            
                            <option value='Salt Lake City'>Salt Lake City, UT</option>
                            <option value='Draper'>Draper, UT</option>
                        </Select>
                       <Link to='/dashboard'><Button onClick={()=>this.props.getCity(this.state.value)}>Find Dishes</Button></Link> 
                    </Label>
                </Form>
                </Div>
                {/* <ParentDiv>
                <Div1>
                <>
                    <h4>1: Input your city</h4>
                    <p>Search for dishes in your city</p>
                </>
                <>
                    <h4>2: Filter by category</h4>
                    <p> See all dishes or dishes for a specific category of food </p>
                </>
                <>
                    <h4>3: Get restaurant info for the dish that stands out to you!</h4>
                    <p>See the dish name and its restaurant address for the dish you're in the mood for</p>
                </>
                </Div1>
                </ParentDiv> */}

            </Div2>
            </>

        )
    }
}

export default connect(null,{getCity})(Search)

const Div = styled.div`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
width: 50%;

height: 28vh;
margin-top: 2em;
border-radius: 3px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: white;

@media(max-width:1200px){
    background: none;
    width: 100%;
    margin-top:none;
}

`
const Form = styled.form`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
margin-bottom: 3em;
display: flex;
justify-content: space-around;
width: 100%;
height: 3em;

`

const Input =styled.input`
width: 60%;
border-radius: 6px;
height: 2em;
padding-left: 15%;
font-size: 1em;

`
const Button= styled.button`

background:  #ed6c5c;
border-radius: 3px;
border: 2px solid #ed6c5c;
color: white;
margin: 0 0 0 1em;
padding: 0.25em 1em;
height: 100%;
:hover{
    background: white;
    color: black;
    border: 2px solid #ed6c5c;

}


`
const ParentDiv= styled.div`
width: 100%;
display: flex;
justify-content: center;
color:white;
@media(max-width:400px){
width: 100%;
display: flex;
justify-content: center;
}



`
const Div1= styled.div`
width: 18%;
display: flex;
flex-direction: column;
align-items: flex-start;


@media(max-width:420px){
width: 80%;
display: flex;
flex-direction: column;
}
`
const Select= styled.select`
background-color: white;
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
font-family: 'Noto Sans TC', sans-serif;
border-radius: 6px;
min-width: 50%;
border: 2px solid #ed6c5c;
height: 100%;
outline: none;
`


const Div2= styled.div`
background: url('https://images.unsplash.com/photo-1521136686176-732808c0fcc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600')no-repeat center center fixed;
background-size: cover;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;

`

const Label=styled.label`
display: flex;
justify-content: space-around;
`
const H2= styled.h2`
margin-bottom: 1em;
font-size: 1.5em;
font-weight: 500;
`