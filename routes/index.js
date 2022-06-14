//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();


//importacionde controladores
const recipesController = require('../controllers/recipesController');


module.exports = function() {          //function que genere las rutas
 
    router.get('/recipes', recipesController.list);
    router.post('/recipes', recipesController.add); 
    router.put('/recipes/:id' , recipesController.update);
    router.delete('/recipes/:id',recipesController.delete);
    router.get('/recipes/:id',recipesController.show);

    router.get('/',(req,res)=>{

      res.send("CRUDRECIPES");
      });



    

    return router;
};