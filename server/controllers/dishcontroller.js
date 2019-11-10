module.exports={
    getAllDishes: (req, res)=>{
        const dbInstance= req.app.get('db')
        const{city}= req.params

        dbInstance.dishes.get_all_dishes({city})
        .then(dishes =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    addDish: (req, res) => {
        const db = req.app.get('db')
        const { city } = req.params
        const { dish_name,
          dish_description,
          dish_category,
          img_url,
          img_cred,
          rest_id
        } = req.body

        db.dishes.add_dish({
          dish_name,
          dish_description,
          dish_category,
          img_url,
          img_cred,
          rest_id
        }).then((dbRes) => {
          return res.status(200).send(dbRes[0])
        })
        .catch((err) => {
          console.log('error adding dish - ', err)
          return res.status(500).send("Server Error")
        })
    },

    getCategory: (req, res)=>{
        const dbInstance =req.app.get('db')
        const {category, city}= req.params

        dbInstance.dishes.get_category({category, city})
        .then((dishes) =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    getRestaurant:(req, res)=>{
        const db = req.app.get('db')
        const {id} = req.params

        db.dishes.get_restaurant({id})
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    searchRestaurantsByName: (req, res) => {
        const db = req.app.get('db')

        db.restaurants.search_by_name({ rest_name })
        .then((dbRes) => {
            console.log('search by name response: ', dbRes)
            return res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log('error searching restaurants by name: ', err)
            return res.status(500).send('Server Error')
        })
    },

    addFavorite:(req, res)=>{
        const db= req.app.get('db')
        const {user_id, dish}= req.body

        db.dishes.add_favorite({user_id, dish})
        .then((dbRes)=> {
            res.status(200).send('Added to favorites')
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    getUserFavorites: (req, res)=>{
        const db= req.app.get('db')
        const {id}= req.params

        db.dishes.get_user_favorites(+req.params.id)
        .then((dbRes)=>{
            res.status(200).send(dbRes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    deleteFavorite: (req, res)=>{
        const db= req.app.get('db')
        console.log(req.params)

        db.dishes.delete_favorite(+req.params.id, +req.query.dish)
        .then((dbRes)=>{
            res.status(200).send('Removed from favorites')
        })
    }
}
