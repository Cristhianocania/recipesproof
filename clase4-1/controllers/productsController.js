const productsModel = require("../models/productsModel")
const categoryModel = require("../models/categoriesModel")
module.exports={
    getAll: async function(req, res, next) {
        try{
            let queryFind = {}
            if(req.query.buscar){
                queryFind={name:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
            }
            const documents = await productsModel.find(queryFind).populate("category")
            .select("name price").sort({price:-1,name:1})
            res.status(200).json(documents)
        }catch(e){
            next(e)
            
        }
    },
    getById: async function(req, res, next) {
        console.log(req.params)
        try{
            const documents = await productsModel.findById(req.params.id).populate("category")
            
            res.json(documents)
        }catch(e){
            next(e)
        }
    },
    create: async function(req, res, next) {
        console.log(req.body)
        try{
            const category = await categoryModel.findBydIdAndValidate(req.body.category)
            console.log(category)
            if(category.error){
                res.json(category)
                return;
            }
            const product = new productsModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                category:req.body.category,
                tags:req.body.tags
            })
            const document = await product.save()
            res.status(201).json(document)
        }catch(e){
            console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            
            next(e)
        }
        
        
    },
    update:async function(req, res, next) {
        try{
            console.log(req.params)
            console.log(req.body)
            const producto = await productsModel.updateOne({_id:req.params.id},req.body)
            res.json(producto)
        }catch(e){
            next(e)
        }
      },
    delete: async function(req, res, next) {
          try{
            console.log(req.params)
            const producto = await productsModel.deleteOne({_id:req.params.id})
            res.json(producto)
          }catch(e){
            next(e)
          }
      }
}