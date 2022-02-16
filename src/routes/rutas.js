const express = require('express');
const router = express.Router();

const asociadoController = require('../controllers/asociadoController');
const vacunaController = require('../controllers/vacunaController');
const iasociadoController = require('../controllers/iasociadoController');

//Rutas Asociado
router.get('/', asociadoController.list);
router.post('/add', asociadoController.save);

//Rutas Vacuna
router.get('/vacuna', vacunaController.list);
router.post('/vacuna/add', vacunaController.save);
router.get('/vacuna/delete/:idVacuna', vacunaController.delete);
router.get('/vacuna/edit/:idVacuna', vacunaController.edit);
router.post('/vacuna/update/:idVacuna', vacunaController.update);

//Rutas Iasociado
router.get('/iasociado', iasociadoController.list);
router.get('/iasociado/delete/:id', iasociadoController.delete);
router.get('/iasociado/edit/:id' , iasociadoController.edit);
router.post('/iasociado/update/:id', iasociadoController.update);

module.exports = router;