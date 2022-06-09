const express = require ('express'); //exportacion de express
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();//instancia de express
const jwt = require('jsonwebtoken');
const routes = require ('./routes');
const createError = require('http-errors');
const axios = require('axios');



//app.set('secretKey','09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7');


/*configuracion de mongoose para la conexion*/
mongoose.Promise= global.Promise
mongoose.connect(
    'mongodb+srv://cristhian:1234@cluster0.io3kh.mongodb.net/tallerseis?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,

    })
    .then(db => console.log('BD conectada'))
    .catch(error => console.log(error));

    //habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

    //habilitar cors
app.use(cors());
app.use('/',routes());

let url1 ='https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}';

axios.get(url1)
.then(() => {
  console.log("ASD");
});
 

/*function validateUser(req,res,next){
    jwt.verify(req.headers['x-access-token'],req.app.get("secretKey"),function(err,decoded){
      if(err){
        res.json({message:err.message})
      }else{
        console.log(decoded)
        req.body.tokenData = decoded;
        next();
      }
    })
  }
  app.validateUser = validateUser;*/


  app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(process.env.PORT || 5000); //nos da el puerto heroku por defecto en caso de que no va estar el 5000

module.exports = app;
