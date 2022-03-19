const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        message: 'Un mensaje :P'
    });
});

app.get('/medidor', (req, res) =>  {
    const { query } = req; 
    res.render('medidor', {
        ...query,
    })
})

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});