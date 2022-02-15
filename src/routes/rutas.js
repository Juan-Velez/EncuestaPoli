const express = require('express');
const router = express.Router();

const asociadoController = require('../controllers/asociadoController');
const vacunaController = require('../controllers/vacunaController');
const iasociadoController = require('../controllers/iasociadosController');

//Rutas Asociado
router.get('/', asociadoController.list);
router.post('/add', asociadoController.save);
router.get('/delete/:id',asociadoController.delete);
router.get('/update/:id', asociadoController.edit);
router.post('/update/:id', asociadoController.update);

//Rutas Vacuna
router.get('/vacuna', vacunaController.list);
router.post('/vacuna/add', vacunaController.save);
router.get('/vacuna/delete/:idVacuna',vacunaController.delete);
router.get('/vacuna/update/:idVacuna', vacunaController.edit);
router.post('/vacuna/update/:idVacuna', vacunaController.update);

//Rutas iempleados
router.get('/iasociado', iasociadoController.list);
router.get('/iasociado/delete/:id',iasociadoController.delete);
router.post('/iasociado/update/:id', iasociadoController.update);

module.exports = router;