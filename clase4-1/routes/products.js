var express = require('express');
var router = express.Router();

const productContoller = require("../controllers/productsController")

/* GET users listing. */
router.get('/', productContoller.getAll);
router.get('/:id', productContoller.getById);
router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, productContoller.create);
router.put('/:id', productContoller.update);
router.delete('/:id', productContoller.delete);
module.exports = router;
