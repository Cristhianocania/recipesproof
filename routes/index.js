//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();


//importacionde controladores


module.exports = function() {         

 
    router.get('/', (req,res) => {

        res.send("asd")
    });

 
    return router;
};