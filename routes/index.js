//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();


//importacionde controladores
const recipesController = require('../controllers/recipesController');


module.exports = function() {          //function que genere las rutas




    
    router.get('/recipes',recipesController.list);
    
    router.post('/recipes', recipesController.add); 

    router.get('/recipes/:id',recipesController.show);
    router.put('/recipes/:id',recipesController.update);
    router.delete('/recipes/:id',recipessController.delete);
    router.get('/products/search/:query',productsController.search);



    

    return router;
};