module.exports={
    getAllDishes: (req, res)=>{
        const dbInstance= req.app.get('db')

        dbInstance.get_all_dishes()
        .then(dishes =>{
            res.status(200).send(dishes)
        })
        .catch(error =>{
            if(error) throw error
        })
    },

    
}