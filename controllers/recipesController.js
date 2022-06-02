//importamos modelo Recipes
const Recipes= require ('../models/Recipes');



//agregar receta
module.exports= {
add : async (req,res) => {
try {
    const recipe = new Recipes(req.body);

    await recipe.save();
    res.json(recipe); // c
   

    }catch(error){

       res.status(400).json({
           message: 'Error al procesar la peticion'
    
   })
}

},



//primera  accion :list
list :async (req,res ) => {

    try{
        const recipe = await Recipes.find({}); //recipes =  recupera la lista de recetas del modelo 
        res.json (recipe); //se devuelven en json
        }catch(error){
            console.log(error);
            res.send(error);
            next();

        }

}, //luego de este paso hay que generar una ruta para acceder a esta accion (creacion de rutas)


//leer receta por id
show : async (req,res,next) =>{

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
},


//actulaizar receta

update : async (req,res,next) =>{

   
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
} ,

//delete receta

delete : async (req,res,next) =>{

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
},

//buscar
search :async (req,res,next)=> {
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
    }


}