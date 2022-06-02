//configuracion de rutas para nuestra api
const express = require ('express');
const router1 = express.Router();

//importacionde controladores
const recipesController = require('../controllers/recipesController');

module.exports = function() {          //function que genere las rutas

    router.get('/recipes',recipesController.list);
    router.post('/recipes',recipesController.add); 
    router.put('/recipes/:id' ,recipesController.update);
    router.delete('/recipes/:id',recipesController.delete);
    router.get('/recipes/search/:query',recipesController.search);
    router.get('/recipes/:id',recipesController.show);

    return router1;
};