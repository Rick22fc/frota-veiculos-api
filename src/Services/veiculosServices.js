import { pool } from '..config/db.js';

class VeiculoServices{
    async getALL(){
        const res = await pool.query("SELECT FROM * veiculos RETURNING")
        return res.rows;
    }
    async create(modelo,marca)
}

export const veiculoServices = new VeiculoServices