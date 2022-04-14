//importamos mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
var http=require('http');
const fs = require("fs");
const mineType = require("mime-types");

const recipesSchema = new Schema({

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
        type: Date,
        default:"sin imagen"
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

module.exports= mongoose.model ('Recipes',recipesSchema); 