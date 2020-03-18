const Consulta = require('../models/Consulta');

module.exports = {
    async index(request, response) {
        const consultas = await Consulta.query("SELECT * FROM consultas",() => {
            if(consultas){
                console.log(consultas);
            }
            return response.json(consultas._results);
        });       
    }
}