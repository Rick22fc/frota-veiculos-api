import { pool } from '../config/db.js';

class VeiculoServices{
    async getALL(){
        const res = await pool.query("SELECT FROM * veiculos RETURNING")
        return res.rows;
    }
    async create(modelo,marca,ano,placa){
        const res = await pool.query("INSERT INTO veiculos (modelo,marca,ano,placa) VALUES $1, $2, $3, $4 RETURNING ",
        [modelo, marca, ano, placa  ])
        return res.rows[0]
    }
}

export const veiculoServices = new VeiculoServices