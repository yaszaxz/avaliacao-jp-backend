const express = require('express')

const ControllerCalculadora = require("../controller/calculadora")
const router = express.Router();

router.post('/calculadora/somar', ControllerCalculadora.Somar)
router.post('/calculadora/subtrair', ControllerCalculadora.Subtrair)
router.post('/calculadora/multiplicar', ControllerCalculadora.Multiplicar)
router.post('/calculadora/dividir', ControllerCalculadora.Dividir)
router.post('/calculadora/potenciar', ControllerCalculadora.Potenciar)
router.post('/calculadora/radiciar', ControllerCalculadora.Radiciar)

module.exports = router;