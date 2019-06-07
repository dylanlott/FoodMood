import React, {Component} from 'react'
import axios from 'axios'

class Favorites extends Component{

    constructor(){
        super()
        this.state={
            favorites:[]
        }
    }

    componentDidMount=()=>{
        axios.get()

        //write functionality to display users favorites
    }


    render(){
        return(
            <div>
                <h1>User Favorites</h1>
            </div>
        )
    }
}

export default Favorites 