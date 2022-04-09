import express from 'express';
import { Perimetros } from './lib/perimetros';
import { Areas } from './lib/areas';

const perimetros = new Perimetros();
const areas = new Areas();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routePerimetros = express.Router();
const routeAreas = express.Router();

routePerimetros.get('/cuadrado', (req, res) => {
    const { lado } = req.query;
    const _lado:number = Number(lado);

    res.status(200).json({
        perimetro: perimetros.perimetroCuadrado(_lado),
    });
});

routeAreas.get('/cuadrado', (req, res) => {
    const { lado } = req.query;
    const _lado:number = Number(lado);

    res.status(200).json({
        areas: areas.areaCuadrado(_lado),
    });
});

app.use('/perimetros', routePerimetros);
app.use('/areas', routeAreas);

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
    console.log(err);
});