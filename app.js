const express = require ('express'); //exportacion de express
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();//instancia de express
const jwt = require('jsonwebtoken');
const routes = require ('./routes');

app.set('secretKey',"sebastian")


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

function validateUser(req,res,next){
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
  app.validateUser = validateUser;



app.listen(process.env.PORT || 5000); //nos da el puerto heroku por defecto en caso de que no va estar el 5000

module.exports = app;
