const express = require('express');
const router = express.Router();


const pessoasController = require('../controllers/controller');



router.get('/', pessoasController.findAll);

router.get('/:id', pessoasController.findById);

router.post('/', pessoasController.create);

router.delete('/:id', pessoasController.delete);

router.put('/:id', pessoasController.update);



module.exports = router;
