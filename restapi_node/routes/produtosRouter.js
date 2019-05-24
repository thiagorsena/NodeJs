
var express = require('express');

var Produto = require('.././models/produtoModel');
var produtosController = require('../controllers/produtosController')(Produto);

var produtosRouter = express.Router();

produtosRouter.route('')
    .get(produtosController.get)
    .post(produtosController.add);

produtosRouter.route('/:id')    
   .get(produtosController.getById)
   .put(produtosController.update)
   .delete(produtosController.del);

module.exports = produtosRouter;    