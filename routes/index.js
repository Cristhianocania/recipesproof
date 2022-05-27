//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();


//importacionde controladores
const recipesController = require('../controllers/recipesController');


module.exports = function() {          //function que genere las rutas


    router.get('/', function(req, res, next) {
        res.send("CRUD RECIPES :)")
      });  

 
    router.get('/recipes',recipesController.list);
    router.post('/recipes', (req,res,next) => {req.index.verifyToken(req,res,next)},recipesController.add); 

    
    router.put('/recipes/:id' ,recipesController.update);
    
    router.delete('/recipes/:id',recipesController.delete);
    router.get('/recipes/search/:query',recipesController.search);
    router.get('/recipes/:id',recipesController.show);


    

    return router;
};