//importamos modelo Recipes
const Recipes= require ('../models/Recipes');
const jwt = require ('jsonwebtoken');

/*
// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
         const bearerToken = bearerHeader.split(" ")[1];
         req.token  = bearerToken;
         next();
    }else{
        res.sendStatus(403);
    }
}*/
/******** */
  /*  jwt.sign({recipe}, 'secretkey', {expiresIn: '1000s'}, (err, token) => {
        res.json({
            token
        });
    });
*/

//agregar receta

exports.add = async (req,res) => {
try {
    const recipe = new Recipes(req.body);

    await recipe.save();
    res.json(recipe); // 

   

    }catch(error){

       res.status(400).json({
           message: 'Error al procesar la peticion'
    
   })
}

};



//primera  accion :list
exports.list = async (req,res ) => {

    try{
        const recipe = await Recipes.find({}); //recipes =  recupera la lista de recetas del modelo 
        res.json (recipe); //se devuelven en json
        }catch(error){
            console.log(error);
            res.send(error);
            next();

        }

}; //luego de este paso hay que generar una ruta para acceder a esta accion (creacion de rutas)


//leer receta por id
exports.show = async (req,res,next) =>{

    try {
        const recipe = await Recipes.findById(req.params.id);
        if(!recipe){
            res.status(404).json({
                message: 'La receta no existe'
            });
        }
        res.json(recipe);

    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la peticion'
        })
    }
}


//actulaizar receta

exports.update = async (req,res,next) =>{

   
    try {
    
        let request = req.body;
         request.date_modified = new Date();

        const recipe = await Recipes.findByIdAndUpdate({_id: req.params.id},req.body,{new:true}) 

    
        if(!recipe){
            res.status(404).json({
                message: 'La receta no existe'
            });
        }
        res.json(recipe);
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
        
    }
} ;



//delete receta

exports.delete = async (req,res,next) =>{

    try {
        await Recipes.findOneAndDelete(
            {  _id: req.params.id});
            
            res.status(204).json({
            
            });
                   
        
       

    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
    }
}

//buscar
exports.search =async (req,res,next)=> {
    try {
    
          const recipes =await Recipes.find({
              name: new RegExp(req.params.query,'i'),
            });
        res.json(recipes);
         
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
    }
    };
