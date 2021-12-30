'use strict';

const Pessoas = require('../models/model');

//pesquisa de uma pessoa
exports.findAll = function (req, res) {
    Pessoas.findAll(function (err, pessoas) {
        console.log('pesquisando todos');
        
        if (err) {
            res.send(err);
            console.log('res', pessoas);
            
        }else{
            res.send({message: pessoas});
        }
    });
};

//pesquisa de varias pessas
exports.findById = function (req, res) {
    Pessoas.findById(req.params.id, function (err, pessoas) {
        console.log("pesquisando uma pessoa");
        if (err) {
            res.send(err);
            res.json(err);
        }else{
            res.json(pessoas)
        }
    });
}

//criando uma nova pessoa
exports.create = function (req, res) {
    //recebendo o conteudo.
    const nova_pessoa = new Pessoas(req.body);

    // conteudo nullo.
    if (req.body.constructor == Object &&  Object.keys(req.body).length ===0) {
        
        res.status(400).send({message: "Por favor informe todoso os dados necessarios."});
    }else{
        Pessoas.create(nova_pessoa, function (err, pessoas) {
            if (err) {
                res.send(err);
                
            }else{

                res.json(req.body);
            }
        });
    }

};


// deletando uma pessoa

exports.delete = function (req, res) {
    Pessoas.delete(req.params.id, function (err, pessoas) {
       
        if (err) {
            res.send({message:"errado", err});
        }else{
            res.send({message:"registro deletado com sucesso."});
        }
    });
}


// atualizar uma pessoa
exports.update = function (req, res) {
     
    // conteudo nullo.
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({message:"Preencha todos os campos"});
    }else{
        Pessoas.update(req.params.id, new Pessoas(req.body), function (err, pessoas) {
            if (err) {
                res.send({message:"atualização deu erro"});
            }else{
                res.send({message:"pessoa atualizada com sucesso."});
            }
        })
    }
}

