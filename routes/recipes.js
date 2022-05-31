//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');


//importacionde controladores
const recipesController = require('../controllers/recipesController');



module.exports = function() {          //function que genere las rutas

    router.get('/recipes',recipesController.list);
    router.post('/recipes',verifyToken, (req , res) => {

        jwt.verify(req.token, 'secretkey', (error, authData) => {
            if(error){
                res.sendStatus(403);
            }else{
                res.json({
                        mensaje: "Post fue creado",
                        authData
                    });
            }
        });
    },recipesController.add); 
    

    
    router.put('/recipes/:id' ,recipesController.update);
    
    router.delete('/recipes/:id',recipesController.delete);
    router.get('/recipes/search/:query',recipesController.search);
    router.get('/recipes/:id',recipesController.show);


    

    return router;
};