import { Router } from 'express';
import { veiculoServices } from '../Services/veiculosServices.js';

 export const router = new Router();

router.get("veiculos", async (req,res) =>{
    const veiculo = await veiculoServices.getALL();
    return res.json(veiculo)
})
router.post("/veiculos", async (req,res) =>{
    const veiculos = await veiculoServices.create(req,body);
    return res.status(201).json(veiculos)
})




