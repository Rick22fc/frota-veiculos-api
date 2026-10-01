import {Router} from 'espress';
import { veiculoServices } from '../Services/veiculosServices';

export const VeiculoRoutes = Router();

VeiculoRoutes.get("veiculos", async (req,res) =>{
    const veiculo = await veiculoServices.getALL();
    return res.json(veiculo)
})
VeiculoRoutes.post("/veiculos", async (req,res) =>{
    const veiculos = await veiculoServices.create(req,body);
    return res.status(201).json(veiculos)
})




