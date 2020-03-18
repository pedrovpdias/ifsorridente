const mysqlModel = require('mysql-model');
const connection = require('../index');

const ConsultaModel = connection.extend({
    tableName: 'consultas',
});

module.exports = ConsultaModel;