//Require things
require('dotenv').config()
const express= require('express')
const session= require('express-session')
const massive= require('massive')


const app= express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING}= process.env

app.use(express.json())

//Session set up




//Massive Setup



//Endpoints for frontend



app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} points to griffindor`))
