const Contenedor = require('./Contenedor');

const p1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  };

const p2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
};

const p3 = {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
};

async function main() {
    const contenedor = new Contenedor('./productos.json');

    console.log('Muestra Todo:');
    let objs = await contenedor.getAll();
    console.log(objs);

    console.log('Guardo producto 1:');
    let idp1 = await contenedor.save(p1);
    console.log('id de p1: ', idp1);

    console.log('Guardo producto 2:');
    let idp2 = await contenedor.save(p2)
    console.log('id de p2: ', idp2);

    console.log('Guardo producto 3:');
    let idp3 = await contenedor.save(p3)
    console.log('id de p3: ', idp3);

    console.log('Muestro todo:');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Busco por id: ' + idp2);
    let res = await contenedor.getById(idp2);
    console.log('Resultado: ', res);

    console.log('Borro por id: ' + idp2);
    res = await contenedor.deleteById(idp2);
    console.log('Resultado: ', res);

    console.log('Muestro todo:');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Borro por id: ' + idp2);
    res = await contenedor.deleteById(idp2);
    console.log('Resultado: ', res);

    console.log('Muestro todo:');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Borro todo: ');
    res = await contenedor.deleteAll();
    console.log(res);

    console.log('Muestro todo:');
    objs = await contenedor.getAll();
    console.log(objs);

}

// Ejecutamos los casos
main();