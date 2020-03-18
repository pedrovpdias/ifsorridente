const { Router } = require('express');
const ConsultaController = require('./controllers/ConsultaController');

const routes = Router();

routes.get('/admin', ConsultaController.index);

module.exports = routes;