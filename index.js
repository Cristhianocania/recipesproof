const express = require ('express'); //exportacion de express
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();//instancia de express

const routes = require ('./routes');

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

 // habilitar la carpeta uploads como carpeta statica y publica para que un cliete vea la imagen de un producto


 

/* app.get('/', function(req,res){

    res.send('hola mundo ee eeeeeeeeeeeeeeeeeeewey');
});

/*ruta de tipo get .
REQUEST= peticion que llega a nuestro servidor web o backend. 
response=objeto a traves el cual nuestro servidor va a responder*/

app.listen(process.env.PORT || 5000); //nos da el puerto heroku por defecto en caso de que no va estar el 5000