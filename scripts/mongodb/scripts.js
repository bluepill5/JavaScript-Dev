/* -------------------------------------------------------------------------- */
/*                                Some commands                               */

const { set } = require("express/lib/application")

/* -------------------------------------------------------------------------- */
mongo
/* ----------------------------- Bases de datos ----------------------------- */
show dbs
/* ------------------------ Base que estoy utilizando ----------------------- */
db
/* ------------------------- Crear una base de datos ------------------------ */
use mydb
db.usuarios.insert({
    nombre: 'Alexandro'
})
db.usuarios.insert({
    nombre: 'Alexandro',
    arr: [1, 'a', 1, 2, {obj: 'Objeto'}],
    email: 'test@email.com'
})
/* ------------------------------- Colecciones ------------------------------ */
show collections
/* ------------------------------- Información ------------------------------ */
db.usuarios.find()
db.usuarios.find().pretty()
/* ------------------------- Renombrar una colleción ------------------------ */
db.usuarios.renameCollection('usuarios')
/* ------------------------------ Restore data ------------------------------ */
mongorestore File
/* -------------------------- Remover la colección -------------------------- */
db.collection.drop()
/* ---------------------------- Cargar un script ---------------------------- */
load(script.js)
/* ----------------------------- Crear colección ---------------------------- */
db.createCollection('coleccion')
/* ------------------------------ Estadísticas ------------------------------ */
db.movies.stats()
db.movies.storageSize()
db.movies.totalIndexSize()
db.movies.totalSize()
db.movies.validate(full: true)
/* -------------------------------------------------------------------------- */
/*                                Create & Read                               */
/* -------------------------------------------------------------------------- */
db.usuarios.insertOne({name: 'bluepill5'})
db.usuarios.insertMany([{name: 'bluepill5'}, {name: 'bluepill68'}])
db.usuarios.insertMany([{name: 'bluepill8'}, {name: 'bluepill9'}], {ordered: false})
db.usuarios.insertOne({name: 'bluepill5', date: ISODate()})

db.usuarios.findOne()
db.usuarios.find()
db.usuarios.find().pretty()
db.usuarios.find({name: 'bluepill5', date: ISODate('2022-04-15T16:01:48.265Z')}) // implicit logical 'AND'
db.usuarios.find({date: ISODate('2022-04-15T16:01:48.265Z')}) 

/* ------------------------------- Contadores ------------------------------- */
db.usuarios.count()

/* --------------------------------- Filtros -------------------------------- */
db.movies.find({year: 2000}).count()
db.movies.estimatedDocumentCount()
/* ---------------------------- Read con filtros ---------------------------- */
db.movies.find({'year': {$gt: 1970}}).sort({year: 1})
db.movies.find({'year': {$gte: 1970}})
db.movies.find({'year': {$lt: 1970}})
db.movies.find({'year': {$lte: 1970}})
db.movies.find({'year': {$ne: 1970}})
db.movies.find({'year': {$in: [1958, 1959]}})
db.movies.find({'year': {$nin: [1958, 1959]}})
db.movies.find({'year': {$exists: true}})
db.movies.find({'plot': {$exists: false}})
db.movies.find({'countries': {$size: 2}})
db.movies.find({'directors': {$all: ['Joe May']}})
db.movies.find({$or: [{year: {$gt: 2000}}, {type: {$ne: 'movie'}}]})
db.movies.find({$and: [{year: {$gt: 2000}}, {type: {$ne: 'movie'}}]})
db.movies.find({$and: [{year: {$ne: 2000}}, {year: {$type: 16}}]})
db.movies.find({$nor: [{year: 2015}, {type: {$ne: 'movie'}}]})
/* ------------------------- Operadores para filtros ------------------------ */
$and: [{}, {}]
$or: [{}, {}]
$lt, $lte, $gt, $gte, $ne, $eq
$exists
$in, $nin
$size
$all
$elemMatch
/* --------------------------- Filtros combinados --------------------------- */
db.movies.find({'year': {$not: {$eq: 1970}}})
/* ---------------------------- Filtros Avanzados --------------------------- */
db.movies.find({title:/little/i}, {title:1, _id:0}).sort({title: -1})
/* --------------------------------- Update --------------------------------- */
db.movies.updateOne({"_id": 1}, {"year": 2016})
db.movies.updateMany({"_id": 1}, {"year": 2016})
/* ------------------------------ findAndUpdate ----------------------------- */
db.coll.findAndUpdate({'name': 'Max'}, {$inc: {'points': 5}}, {returnNewDocument: true})
/* --------------------------------- Upsert --------------------------------- */
db.movies.updateOne({'_id': ObjectId('1')}, {$set: {item: 'apple'}, $setOnInsert: {qty: 100}}, {upsert: true})
/* -------------------------------------------------------------------------- */
/*                              Creando usuarios                              */
/* -------------------------------------------------------------------------- */
db.createUser({
    user:'bluepill5', 
    pwd: passwordPrompt(),
    roles: [
        {
            role: "userAdminAnyDatabase",
            db: "admin"
        },
        {
            role: "readWriteAnyDatabase",
            db: "admin"
        }
    ]
})

mongo -u bluepill5 -p --authenticationDatabase admin

use sample_mflix
db.createUser({user: 'user', pwd:'123456', roles: [{role:'read', db: 'sample_mflix'}]})

db.getUsers()

mongo -u user -p --authenticationDatabase sample_mflix





