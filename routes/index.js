//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();
const axios = require('axios');


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

        res.send("CRUD RECIPES");

        let url1 ='https://jsonplaceholder.typicode.com/todos';

        let data ={
          nombre:'cristhian',
          edad:31,
          alias:'jurgen'
        }

        let config={
          headers:{
            Authorization:"bearer asdddasnfabfnasbfn",

          }
        }

axios.get(url1,data,config)
.then(res => {
  console.log(res.data);
});
 
      });



    

    return router;
};