const mysqlModel = require('mysql-model');

const IFSorridenteModel = mysqlModel.createConnection({
    host: 'localhost',    
    port: 3306,
    user: 'root',
    password: '',
    database: 'ifsorridente',
});

module.exports = IFSorridenteModel;