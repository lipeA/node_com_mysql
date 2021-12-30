'use strict';

const dbConn = require('./../../config/config');

// creando o objeto pessoas

const Pessoas = function(pessoas) {
    this.nome = pessoas.nome;
    this.sobrenome = pessoas.sobrenome;
    this.telefone = pessoas.telefone;
    this.email = pessoas.email;
};

// cadastrando uma pessoas
Pessoas.create = function (novaPessoa, result) {
    dbConn.query('INSERT INTO pessoas set ?', novaPessoa, function(err, res){
        if (err) {
            console.log('error:', err);
        }else{
            console.log(res.insertId); //retorna o id da pessoa
            result(null, res.insertId);
        }
    });

};


// pesquisando uma pessoas
Pessoas.findById = function (id, result){
    dbConn.query('select * from pessoas where id = ?', id, function (err, res) {
    
        if (err) {
            console.log('error:', error );
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

// pesquisando todas as pessoas

Pessoas.findAll = function (result) {
    dbConn.query('select * from pessoas', function (err, res) {
        
        if (err) {
            console.log('error:',err);
            result(null, err)
        }else{
            console.log('Pessoas: ', res);
            result(null, res);
        }
    });
}

// atualizar pessoas

Pessoas.update = function (id, pessas, result) {
    dbConn.query('UPDATE pessoas set nome = ?, sobrenome = ?, telefone =?, email = ?', [pessas.nome, pessas.sobrenome, pessas.telefone, pessas.email ],
    
     function (err, res) {
       
        if (err) {
            console.log('error: ', err)
            result(null, err)
        }else{
            result(null, res);
        }
    
    });
};

//deletar uma pessoa
Pessoas.delete = function (id, result) {
    dbConn.query('DELETE FROM pessoas where id = ?', [id], function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(null, res);
        }else{
            result(null, res);
        }
    });

};

module.exports = Pessoas;






















