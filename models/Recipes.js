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
        default:"sin imagen"

    },
    date_creation:{
        type: Date,
        default:Date.now,
        
       
    },
    date_modified:{
        type: Date,
        default:Date.now,
       
    },
    user_id:{
        type:String
    }
});
recipesSchema.pre('save', function preSave(next){ /*findByIdAndUpdate */

    console.log("pase por aca");

    var changedate = this;
    changedate.date_modified= Date.now();
    next();
  }); // actualizAR FEHCA

module.exports= mongoose.model ('Recipes',recipesSchema); 