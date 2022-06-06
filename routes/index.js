//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();
import fetch from "node-fetch";

//importacionde controladores
const recipesController = require('../controllers/recipesController');


module.exports = function() {          //function que genere las rutas




   

 
    router.get('/recipes',recipesController.list);
    router.post('/recipes',recipesController.add); 
    router.put('/recipes/:id' ,recipesController.update);
    router.delete('/recipes/:id',recipesController.delete);
    router.get('/recipes/search/:query',recipesController.search);
    router.get('/recipes/:id',recipesController.show);

    router.get('/',(req,res)=>{

        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((respuesta) => {
          return respuesta.json()
        }).then((resp) => {
          console.log (resp);
        })
      });



    

    return router;
};