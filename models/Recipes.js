//importamos mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({

    title:{
        type: String,
        trim: true, 
       

    },
    ingredients:{
        type: String,
        trim: true, 

    },
    preparation:{
        type: String,
        trim: true, 
        
        
    },
    image:{
        type: String,
        default:"sin image
"
    },
    date_creation:{
        type: Date,
        default:Date.now,
        
       
    },
    date_modified:{
        type: Date,
        default:Date.now,
       
    },
});

module.exports= mongoose.model ('Recipes',recipesSchema); 