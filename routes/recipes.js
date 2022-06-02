//configuracion de rutas para nuestra api
const express = require ('express');
const router = express.Router();

//importacionde controladores
const recipesController = require('../controllers/recipesController');
    //function que genere las rutas

    router.get('/',recipesController.list);
    router.post('/',recipesController.add); 
    router.put('/:id' ,recipesController.update);
    router.delete('/:id',recipesController.delete);
    router.get('/search/:query',recipesController.search);
    router.get('/:id',recipesController.show);

    module.exports=router;
