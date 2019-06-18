//Require things
require('dotenv').config()
const express= require('express')
const session= require('express-session')
const morgan = require('morgan')
const massive= require('massive')
const auth_ctrl= require('./controllers/authcontroller')
const dish_ctrl= require('./controllers/dishcontroller')

const app= express()

// function logger (req, res, next){
//     console.log('THIS SHIT RAN', req.method, req.path)
//     next()
// }

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING}= process.env

app.use(express.json())
app.use(morgan())
// app.use(logger)

//Session set up

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*60
    }
}))

//Massive Setup

massive(CONNECTION_STRING).then((database)=>{
    app.set('db', database)
    console.log('DB out here with BDE')
})

//Endpoints for authentication/login

app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/logout', auth_ctrl.logout)

//Endpoints for dishes
app.get('/api/dishes/:city', dish_ctrl.getAllDishes)
app.get('/api/restaurant/:id', dish_ctrl.getRestaurant)

//Endpoints for user profile

app.put('/api/user', auth_ctrl.editUser)

//Endpoint for favorites
app.post('/api/favorite', dish_ctrl.addFavorite)
app.get('/api/favorite/:id', dish_ctrl.getUserFavorites)
app.delete('/api/favorite/:id', dish_ctrl.deleteFavorite)

app.get('/api/:city/:category', dish_ctrl.getCategory)

app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} points to griffindor`))
