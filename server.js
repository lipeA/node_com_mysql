const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.get('/', (req, res) => {
    res.send({ message: 'Hello Word' });
});

// rotas
const pessoasRouters = require('./src/routes/router');

app.use('/api', pessoasRouters);




app.listen(port, () => {
    console.log(`servidor rodando.`);
})







