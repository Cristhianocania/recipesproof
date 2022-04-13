//importamos mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recipessSchema = new Schema({

    titulo:{
        type: String,
        trim: true, 
       

    },
    ingredientes:{
        type: String,
        trim: true, 

    },
    preparacion:{
        type: String,
        trim: true, 
        
        
    },
    imagen:{
        type: String,
    },
    fecha_alta:{
        type: Date,
        default:Date.now,
       
    },
    fecha_mod:{
        type: Date,
        default:Date.now,
       
    },
});

module.exports= mongoose.model ('Recipes',recipessSchema); 