//importamos modelo Recipes
const Recipes= require ('../models/Recipes');
const UserService = require ("../services/UserService")


//agregar receta

exports.add = async (req,res) => {
try {
    
    console.log("Entre a recetas", req.headers)
    let user = await UserService.getUser(req.headers.authorization);
    console.log("recipes, fuia user", user)
    let body = req.body;
    body.user_id = user.id;
    const recipe = new Recipes(body);
    console.log("guardando receta",body)
    let recipe_saved = await recipe.save();
    console.log("guardada receta",recipe_saved)
    res.status(201).json(recipe_saved); // c
    }catch(error){

       res.status(401).json({
           message: 'token invalido'
    
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
    
        let body = req.body;
         body.date_modified = new Date();

         
    console.log("Entre a recetas", req.headers)
    let user = await UserService.getUser(req.headers.authorization);
    console.log("recipes, fuia user de actualizar", user.id);


        const recipe = await Recipes.findByIdAndUpdate({_id: req.params.id},body,{new:true}) 

    
        if(!recipe){
            res.status(404).json({
                message: 'La receta no existe'
            });
        }
        res.status(201).json(recipe);
        
    } catch (error) {
        res.status(401).json({
            message:'token invalido'
        });
        
    }
} ;

//delete receta

exports.delete = async (req,res,next) =>{
    



    try {

        let user = await UserService.getUser(req.headers.authorization);
        console.log("recipes, fuia user de delete", user.id);
    
        await Recipes.findOneAndDelete(
            {  _id: req.params.id});
            
            res.status(204).json({
            
            });
                   
        
       

    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
    }
};

exports.search =async (req,res,next)=> {
    try {
        
        
          const recipes =await Recipes.find({
               user_id: req.params.query
            });

        res.json(recipes);
         
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
    }
    };


    exports.me = async (req,res ) => {

        try{

             let user = await UserService.getUser(req.headers.authorization);
             console.log("recipes, fuia user de delete", user.id);
             console.log("recipes, fuia user de delete", user.name);


            res.json (user.data); //se devuelven en json
            
            }catch(error){
                console.log(error);
                //res.send(error);
                //next();
    
            }
    
    };