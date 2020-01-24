import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './Landing.css';
import tiles from '../../../src/landing_tiles.png'
import iphone from '../../../src/landing_iphone.png'
import nearby1 from '../../../src/landing_screen1.png'
import nearby2 from '../../../src/landing_screen2.png'
import location from '../../../src/landing_location.png'

class Landing extends Component{
    
    render(){
        return(
        <Wrapper>
            <Header>
                <Logo>tastebud</Logo>
                <Button>Let me try</Button>
            </Header>

            <Divider></Divider>

            <Text1>
                Find the best dishes &amp; drinks around you
            </Text1>

            <img className="images tiles" src={tiles}></img>

            <Text2>
                Curated by those tasty Instagram food posts
            </Text2>

            <img src={iphone}></img>

            <Text1>
                Not by restaurant, but by dish or drink
            </Text1>

            <Nearby>
                <img className="images nearby" src={nearby1}></img>
                <img className="images nearby" src={nearby2}></img>
            </Nearby>

            <Text1>
                And when you need it
            </Text1>

            <Location>
                <img src={location}></img>
                <Text1>
                    <Text1>
                        I just want a tasty brunch
                    </Text1>

                    <Text1>
                        Look at this lobster eggs benedict that’s close by.
                    </Text1>

                    <Text1>
                        Whaaaat, with bottomless drinks? Let’s go!
                    </Text1>
                </Text1>
            </Location>

            <ActionBar>
                    Vetted Good Food, No Need For Reviews
            </ActionBar>

            <ActionButton>
                    Lemme try it
            </ActionButton>

            <Text4>
                Eh, I have feedback.
            </Text4>

            <Footer>
                <Logo>tastebud</Logo>
                <Button>Let me try</Button>
            </Footer>
        </Wrapper>
        )
    }
}

export default connect()(Landing)

const Wrapper = styled.div`
background-color: #FFFFFF;
`

const Logo=styled(Link)`
margin-top: 10px;
color: #FA897B;
text-decoration: none;
font-size: 26px;
font-weight: 900;
`

const Divider=styled.div`
width: 100%;
border: 1px solid #ECECEC;
transform: rotate(180deg);
`
const Header=styled.div`
margin: 20px 150px;
display: flex;
justify-content: space-between;
`

const Button=styled.button`
background: #FA897B;
border-radius: 50px;
width: 130px;
height: 36px;
border: none;
color: #fff;
font-weight: 800;
font-size: 14px;
`

const Text1=styled.div`
margin: 20px;
margin-top: 100px;
margin-bottom: 100px;
font-family: Overpass;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 12px;
color: #222222;
`

const Text2=styled.div`
margin: 20px;
margin-top: 80px;
font-family: Overpass;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 12px;
color: #222222;
`

const Nearby=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const Location=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const Text3=styled.div`

`

const ActionBar=styled.div`
margin: 120px 0px 0px 0px;
padding: 40px 100px;

font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 50px;
letter-spacing: 0.16px;

color: #fff;
background: linear-gradient(10.1deg, #FDB84B -0.9%, #FA897B 51.81%);
`

const ActionButton = styled.button`
margin-top: -152px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 50px;
border: none;
color: #FA897B;
font-size: 26px;
width: 218px;
height: 60px;
align: center;
cursor: pointer;
`

const Footer = styled.div`
margin: 40px 160px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Text4 = styled.div`
margin: 40px;
text-decoration: underline;
font-size: 18px;
color: #888888;
letter-spacing: 0.16px;
text-decoration-line: 
`
