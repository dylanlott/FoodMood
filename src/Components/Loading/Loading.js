import React from 'react'
import styled from 'styled-components'


function Loading (){
    return(
        <Div>
            <img src={require('../../../src/comida.gif')}></img>
        </Div>
    )
}

export default Loading

const Div = styled.div`
margin-top: 10%;

@media(max-width:1024px)
margin-top: 30%;
`