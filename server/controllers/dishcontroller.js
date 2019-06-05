module.exports={
    getAllDishes: (req, res)=>{
        const dbInstance= req.app.get('db')

        dbInstance.dishes.get_all_dishes()
        .then(dishes =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    getCategory: (req, res)=>{
        const dbInstance =req.app.get('db')
        const {category}= req.params
        console.log(category)

        dbInstance.dishes.get_category({category})
        .then((dishes) =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    }
    
}