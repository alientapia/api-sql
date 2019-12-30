'use strict'

var express = require('express');
var PacienteController = require('../controllers/paciente');

var router = express.Router();


router.get('/pacientes', PacienteController.getPacientes);
router.get('/paciente/:id', PacienteController.getPaciente);
router.post('/paciente', PacienteController.addPaciente);
router.delete('/paciente/:id', PacienteController.deletePaciente);


module.exports = router;