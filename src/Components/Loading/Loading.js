import React from 'react'
import styled from 'styled-components'
const loading = require('../../../src/comida.gif')

function Loading (){
    return(
        <Div>
            <img src={loading}></img>
        </Div>
    )
}

export default Loading

const Div = styled.div`
margin-top: 10%;

@media(max-width:1024px)
margin-top: 30%;
`
