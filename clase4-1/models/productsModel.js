const mongoose = require("../bin/mongodb")
const errorMessage=require("../util/errorMessage")

const tagsSchema = new mongoose.Schema({
   name:String
})
const productSchema = new mongoose.Schema({
   name:{
      type:String,
      required:[true,errorMessage.GENERAL.campo_obligatorio],
      minlength:[3,errorMessage.GENERAL.minlength]
   },
   category:{
      type:mongoose.Schema.ObjectId,
      ref:"categories"
   },
   sku:String,
   description:String,
   price:{
      type:Number,
      min:1,
      get: function(value){
         return value * 1.21
      }/*,
      set: function(value){
         return value * 1.21
      }*/
   },
   createAt:{
      type:Date,
      default:Date.now
   },
   tags: tagsSchema
})
productSchema.virtual("price_currency").get(function(){
   return "$ "+this.price
})
productSchema.statics.findBydIdAndValidate = async function(id){
   const document = await this.findById(id);
   if(!document){
       return{
           error:true,
           message:"No existe categoria"
       }
       
   }
   return document;
}
productSchema.set("toJSON",{getters:true,setters:true,virtuals:true})
module.exports = mongoose.model("productos",productSchema)