const express = require ('express');
const router = express.Router();

//importacionde controladores
const usersController = require('../controllers/usersController');



module.exports = function() {          //function que genere las rutas

    router.get('/users',usersController.list);
    return router;
};