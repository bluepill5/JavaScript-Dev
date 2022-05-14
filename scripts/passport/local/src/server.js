import express, { json, urlencoded } from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import session from 'express-session';
import AuthRouter from './routers/auth.routers.js';
import passport from './utils/passport.utils.js';

import './config/db.js';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.set('views', './src/views');
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    extended: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve() + '/src/views/layouts',
}));


app.use(session({
    secret: process.env.SECRET, 
    cookie: {
        maxAge: Number(process.env.EXPIRE)
    },
    rolling: true,
    resave: true,
    saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', AuthRouter);

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});