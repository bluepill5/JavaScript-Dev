import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));

const user = {
    nombre: 'Coderhouse',
    edad: 30,
    logged: true
}

app.get('/cookieIlimitada', (req, res, next) => {
    res.cookie('Ilimitada', user).send('Cookie ilimitada creada');
});

app.get('/cookieLimitada', (req, res, next) => {
    res.cookie('Limitada', user, {maxAge: 1000}).send('Cookie limitada creada');
});

app.get('/leer', (req, res, next) => {
    const cookie = req.cookies.Ilimitada;
    res.json({ cookie });
});

app.get('/borrar', (req, res, next) => {
    res.clearCookie('Ilimitada').send('Cookie ilimitada borrada');
});

app.get('/cookieFirmada', (req, res, next) => {
    user.firmada = 'Cookie firmada';
    res.cookie('Firmada', user, {maxAge: 30000, signed: true}).send('Cookie firmada');
});

app.get('/leerFirmada', (req, res, next) => {
    const cookieFirmada = req.signedCookies.Firmada;
    res.json({ cookie: cookieFirmada });
});

app.post('/cookies', (req, res, next) => {
    const { nombre, valor, tiempo } = req.body;
    res.cookie(nombre, valor, {maxAge: tiempo, signed: true}).send('Cookie limitada creada');
});

app.get('/all-cookies', (req, res, next) => {
    const cookies = req.signedCookies;
    res.json({ cookies });
});

app.delete('/delete/:nombre', (req, res, next) => {
    const { nombre } = req.params;
    res.clearCookie(nombre).send(`Cookie ${nombre} borrada`)
    
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});