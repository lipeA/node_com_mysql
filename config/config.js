/*
*O strict mode elimina alguns erros silenciosos que passariam batido do JavaScript e os faz emitir erros.
*Em geral é basicamente uma forma mais segura de se escrever o JavaScript 
*pois ele manda muito mais erros caso tente fazer algo não seguro, não otimizado ou não padrão
*/
'use strict';

const mysql = require('mysql');
const dbConn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro_api'
});


dbConn.connect(function(error){
  
    if (error) throw error;
    
    console.log('conectado com o banco de dados');
});


module.exports = dbConn;

