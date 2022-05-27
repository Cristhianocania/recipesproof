const express = require ('express'); //exportacion de express
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();//instancia de express
const jwt = require ('jsonwebtoken');

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


app.post('/recipes', (req , res) => {
    const user = {
        id: 1,
        nombre : "Henry",
        email: "henry@email.com"
    }

  
});

app.post('/recipes', verifyToken, (req , res) => {

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
});

// Authorization: Bearer <token>
function verifyToken(req, res, next){
     const bearerHeader =  req.headers['authorization'];

     if(typeof bearerHeader !== 'undefined'){
          const bearerToken = bearerHeader.split(" ")[1]; //corta la parte del espacio ' <token>'
          req.token  = bearerToken;
          next();
     }else{
         res.sendStatus(403);
     }
}

app.verifyToken= verifyToken;
/*********** */

app.listen(process.env.PORT || 5000); //nos da el puerto heroku por defecto en caso de que no va estar el 5000