/* -------------------------------------------------------------------------- */
/*                                   MongoDB                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- mongo --------------------------------- */
/* ---------------- Crear una base de datos llamada ecommerce --------------- */
use ecommerce

/* ------ Agregar 10 documentos con valores distintos a las colecciones ----- */
/* -------------------------- mensajes y productos -------------------------- */
db.messages.insertMany([

    {
        email: "test1@gmail.com",
        datemessage: ISODate(),
        text: "Hola buen día!!!"
    },
    {
        email: "ecommerce@domain.com",
        datemessage: ISODate(),
        text: "Buen día, en que podemos ayudarlo"
    },
    {
        email: "test1@gmail.com",
        datemessage: ISODate(),
        text: "Perdón tenía duda sobre la existencia de un producto"
    },
    {
        email: "ecommerce@domain.com",
        datemessage: ISODate(),
        text: "Claro, que producto es el que busca?"
    },
    {
        email: "test1@gmail.com",
        datemessage: ISODate(),
        text: "Si, es que veo que tiene el saco X, lo tiene en talla K"
    },
    {
        email: "ecommerce@domain.com",
        datemessage: ISODate(),
        text: "Si, le confirmo que se encuentra en la talla que desea"
    },
    {
        email: "test1@gmail.com",
        datemessage: ISODate(),
        text: "Perfecto!!! muchisímas gracias!!!!"
    },
    {
        email: "ecommerce@domain.com",
        datemessage: ISODate(),
        text: "Que bien, gusta ayuda en algo más?"
    },
    {
        email: "test1@gmail.com",
        datemessage: ISODate(),
        text: "No, sería todo, muchas gracias"
    },
    {
        email: "ecommerce@domain.com",
        datemessage: ISODate(),
        text: "Estamos poara eso, que tenga un buen día!!!"
    }
])

db.products.insertMany([
    {
        title: "Laptop",
        description: "Producto 1",
        price: 120,
        stock: 99,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/job-seeker/256/laptop_job_seeker_employee_unemployee_work-256.png",
        timestamp: ISODate()
    },
    {
        title: "Mochila Compacta",
        description: "Producto 2",
        price: 580,
        stock: 99,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/backpack-and-bag/512/bagpack-10-256.png",
        timestamp: ISODate()
    },
    {
        title: "Chamarra",
        description: "Producto 3",
        price: 900,
        stock: 99,
        thumbnail: "https://cdn1.iconfinder.com/data/icons/clothes-and-outfit-vol-2-2/128/down_jacket_winter_clothes_outfit-256.png",
        timestamp: ISODate()
    },
    {
        title: "Saco",
        description: "Producto 4",
        price: 1280,
        stock: 99,
        thumbnail: "https://cdn4.iconfinder.com/data/icons/men-s-clothing-color/57/jacket_color-256.png",
        timestamp: ISODate()
    },
    {
        title: "Camara",
        description: "Producto 5",
        price: 1700,
        stock: 99,
        thumbnail: "https://cdn2.iconfinder.com/data/icons/geest-travel-kit/128/travel_journey-20-256.png",
        timestamp: ISODate()
    },
    {
        title: "Zapatos",
        description: "Producto 6",
        price: 2300,
        stock: 99,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/camping-123/64/hiking-shoes-camping-trekking-backpacking-256.png",
        timestamp: ISODate()
    },
    {
        title: "Tenis",
        description: "Producto 7",
        price: 2860,
        stock: 99,
        thumbnail: "https://cdn4.iconfinder.com/data/icons/sport-fitness-vol-01/512/40-basketball-shoes-sneakers-256.png",
        timestamp: ISODate()
    },
    {
        title: "Anillo",
        description: "Producto 8",
        price: 3350,
        stock: 99,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/accessories-5/94/09-256.png",
        timestamp: ISODate()
    },
    {
        title: "Anillo 2",
        description: "Producto 9",
        price: 4320,
        stock: 99,
        thumbnail: "https://cdn1.iconfinder.com/data/icons/love-wedding-vol-2/512/diamond_ring_wedding_proposal-256.png",
        timestamp: ISODate()
    },
    {
        title: "Anillo 3",
        description: "Producto 10",
        price: 4990,
        stock: 99,
        thumbnail: "https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_accessory_ring_wedding_gold_jewelry_gift_love-256.png",
        timestamp: ISODate()
    }
])

/* -------------- Listar todos los documentos en cada colección ------------- */
db.messages.find().pretty()
db.products.find().pretty()

/* --- Mostrar la cantidad de documentos almacenados en cada una de ellas --- */
db.messages.find().count()
db.products.find().count()

/* ------------ Realizar un CRUD sobre la colección de productos: ----------- */
/* ---------- Agregar un producto más en la colección de productos ---------- */
db.products.insertOne({
    title: "Pulsera 42",
    description: "Producto 11",
    price: 5555,
    stock: 100,
    thumbnail: "https://cdn1.iconfinder.com/data/icons/bracelets-1/496/magnetic-medical-therapy-bracelets-titanium-256.png",
    timestamp: ISODate()
})

/* -------- Realizar una consulta por nombre de producto específico: -------- */
/* ----------- Listar los productos con precio menor a 1000 pesos. ---------- */
db.products.find({price: {$lt: 1000}})
/* ------ Listar los productos con precio entre los 1000 a 3000 pesos. ------ */
db.products.find({$and: [{price: {$gt: 1000}}, {price: {$lt: 3000}}]})
/* ----------- Listar los productos con precio mayor a 3000 pesos. ---------- */
db.products.find({price: {$gt: 3000}})
/* --- Consulta que traiga sólo el nombre del tercer producto más barato. --- */
db.products.find({}, {title: 1, _id:0}).sort({price: 1}).skip(2).limit(1)

/* ------ Hacer una actualización sobre todos los productos, agregando ------ */
/* ------------ el campo stock a todos ellos con un valor de 100. ----------- */
db.products.updateMany({}, {$set: {'stock': 100}})

/* ---------- Cambiar el stock a cero de los productos con precios ---------- */
/* -------------------------- mayores a 4000 pesos. ------------------------- */
db.products.updateMany({price: {$gt: 4000}}, {$set: {'stock': 0}})

/* ----------- Borrar los productos con precio menor a 1000 pesos ----------- */
db.products.deleteMany({price: {$lt: 100}})

/* ------- Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer ------ */
/* ----- la base de datos ecommerce. Verificar que pepe no pueda cambiar ---- */
/* ----------------------------- la información. ---------------------------- */
db.createUser({
    user:'pepe', 
    pwd: 'asd456',
    roles: [
        {
            role: "read",
            db: "ecommerce"
        }
    ]
})




