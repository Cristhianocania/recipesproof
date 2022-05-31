

const fetch = require('node-fetch')

exports.list = async (req,res ) => {

    try{
        
        fetch('https://api.github.com/users/github')
        .then(res => res.json())
        .then(json => console.log(json));

        }catch(error){
            console.log(error);
            res.send(error);
            next();

        }

}; //luego de este paso hay que generar una ruta para acceder a esta accion (creacion de rutas)

