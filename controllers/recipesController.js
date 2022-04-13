//importamos modelo Recipes
const Recipes= require ('../models/Recipes');


//agregar receta

exports.add = async (req,res) => {
try {
    const recipe = new Recipes(req.body);

    await recipe.save();
    res.json({message:'Nueva receta agregada'});
    res.json (recipe); //se devuelven en json

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
        let newRecipe = req.body; // se recibe peticion se rescatan las propiedades del producto

            const product = await Product.findById(req.params.id); //vamos a la bdd y recatamos el regsitro 
        

        const recipeUpdated = await Recipes.findOneAndUpdate(
        {  _id: req.params.id},
        newRecipe,
        {new:true}
        );
        res.json({
            message:'receta actualizada correctamente'
        });
       

    } catch (error) {
            res.status(400).json({
                message: 'Error al procesar la peticion'
            })
        }
     
     
     };
     


//delete receta

exports.delete = async (req,res,next) =>{

    try {
        await Recipes.findOneAndDelete(
        {  _id: req.params.id});
        
        res.status(204);
        
       

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
