import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
// import FileStore from 'session-file-store';
import redis from 'redis';
import RedisStore from 'connect-redis';
import auth from './middleware/auth.middleware.js'; 

dotenv.config();

// const fileStore = FileStore(session);
const client = redis.createClient(
    process.env.PORT_REDIS,
    process.env.HOST_REDIS
);

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(session({
    store: new fileStore({
        path: './sessions',
        ttl: 300,
        retries: 0,
    }),
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true, 
    // cookie: { maxAge: 1000 },
}));

app.get('/contador', (req, res) => {
    if(req.session.contador) {
        req.session.contador++;
        res.send(`Has visto la pagina ${req.session.contador} veces`);
    } else {
        req.session.contador = 1;
        res.send('Bienvenido!!!!');
    }
});

app.get('/loggin', (req, res, next) => {
     const { user, password } = req.query;
     if(user === 'coderhouse' && password === '123456')  {
         req.session.login = true;
         res.send('Correct!!!!');
     } else {
         res.send('Login incorrect!!!');
     }
});

app.get('/restringida', auth, (req, res) => {
    res.send('Crucial information');
});

app.get('/logout', auth, (req, res) => {
    req.session.destroy((err) => {
        if(!err) {
            res.status(200).send('Salio de la aplicacion');
        } else {
            res.json(err);
        }
    });
});

const PORT = 8080
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});