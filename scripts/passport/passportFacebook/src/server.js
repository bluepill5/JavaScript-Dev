import express, { json, urlencoded } from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import session from 'express-session';
import dotenv from 'dotenv';
import { Strategy } from 'passport-facebook';
import passport from 'passport';

dotenv.config();

passport.use(new Strategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos'],
    scope: ['email']
}, (accessToken, refreshToken, userProfile, done) => {
    console.log(userProfile);
    return done(null, userProfile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

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
    rolling: true,
    resave: true,
    saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile(path.resolve() + '/public/login.html');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/failLogin'
}));

app.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        res.redirect('/datos');
    } else {
        res.redirect('/login');
    }
});

app.get('/datos', (req, res) => {
    if(req.isAuthenticated()) {
        if(!req.user.contador) req.user.contador = 0;
        req.user.contador++;
        res.render('datos', {
            nombre: req.user.displayName,
            foto: req.user.photos[0].value,
            contador: req.user.contador,
        });
    } else {
        res.redirect('/login');
    }
});

app.get('/failLogin', (req, res) => {
    console.log('Login error');
    res.render('login-error', {});
});

app.get('logout', (req, res) => {
    req.logout;
    res.redirect('/');
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});