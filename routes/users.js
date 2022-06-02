const express = require ('express');
const router = express.Router();

//importacionde controladores



module.exports = function() {          //function que genere las rutas

    router.get('/', function(req, res){
        res.send('users ')
      });
      
};   /*ok*/