const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const consultas = await connection('consultas').select('*');
        return response.json(consultas);
    }
}