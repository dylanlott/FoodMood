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
        console.log(req.params.id)
        db.dishes.get_restaurant({id})
      
       
        .then((dbRes)=>{
            
            res.status(200).send(dbRes[0])
        })
        .catch(error =>{
            if(error) throw error
        })
    },


    addFavorite:(req, res)=>{
        const db= req.app.get('db')
        const {user_id, dish}= req.body
        console.log(req.body)

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