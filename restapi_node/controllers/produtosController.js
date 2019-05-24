
//var Produto = require('../models/produtoModel');

var produtoController = function (Produto) {

    var get = function (req, res) {

        Produto.find(function (err, produtos) {

            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(produtos);
            }
        });
    };

    var add = function (req, res) {

        var produto = new Produto(req.body);

        produto.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro : falha ao incluir produto...');
            }
            else {
                res.status(201);
                res.send(produto);
            }
        })
    };

    var getById = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                res.status(200);
                res.send(produto);
            }
        })
    };

    var update = function (req, res) {

        Produto.findById(req.params.id, function (err, produto) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                produto.nome = req.body.nome;
                produto.descricao = req.body.descricao;
                produto.preco = req.body.preco;
                produto.estoque = req.body.estoque;
                produto.ativo = req.body.ativo;

                produto.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(produto);
                    }
                    else {
                        res.status(500);
                        res.send('Falha ao atualizar produto...');
                    }
                })
            }
        });
    };

  /*  var patch = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            if (!err) {
                if (req.body._id) {
                    delete req.body._id;
                }

                for (var p in req.body) {
                    produto[p] = req.body[p];
                }

                produto.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(produto);
                    }
                })
            }
        })
    };*/

   /* var del = function (req, res) {
        Produto.findById(req.body._id, function (err, produto) {
            produto.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Produto deletado...');
                }
            });
        });
    };*/

    var del = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            produto.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Produto deletado...');
                }
            });
        });
    };

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del
    }
};

module.exports = produtoController;

//module.exports = {
//    add: add,
//    get: get,
//    getById: getById,
//    update: update,
//    patch: patch,
//    del: del,
//    dele: dele
//};