const express = require('express');
const router = express.Router();



module.exports = function ()  {

// define the home page route
router.get('/', function(req, res){
  res.send('WELCOME TO Crud RECIPES ')
});

return router;

};