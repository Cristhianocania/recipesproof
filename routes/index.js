//configuracion de rutas para nuestra api

const express = require ('express');
const router = express.Router();


//importacionde controladores


       

 
    router.get('/', (req,res) => {

        res.send("Bienvenido a RECIPES TALLER 6")
    });

 
    module.exports= router;
