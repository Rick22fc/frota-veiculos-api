import express from 'express';
import {veiculoRoutes} from '..Routes/veiculosRoutes.js'

const app = express();
const port = 3000;

app.use(express());
app.use("/veiculos",veiculoRoutes);

app.listen(port, () => {
    console.log(`API rodando em http:localhost:${port}`)
})


