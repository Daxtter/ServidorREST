//Debe haber un getAll y un GetByID
//app.get('/activos/activos:id',p.getID);
//put patch delete

//get all async function(res,res){
//Controladores parametros, req y res
//(req.params.id) para obtener el valor de id cuando se intrese a la pagina 
//Modelos, debe ser getALL y getbyID
//rpm innit
/*
const express = require('express')
const app = express();
*/

//Push
//Path 
//Delete
//Get
//Put

import express from 'express'
//const express = require('express')
const app = express();
//const activo= require('./Controladores/activoControllador.js')
import activo from './Controladores/activoController.js'
import ubicacion from './Controladores/ubicacionController.js'
import responsable from './Controladores/responsableController.js'

app.use(express.json());
//Activo
app.get('/activo',activo.findAll);
app.get('/activo/:id',activo.findById);
app.post('/activo/',activo.post)
app.put('/activo/:id',activo.put)
app.delete('/activo/:id',activo.deleteId)
//ubicacion
app.get('/ubicacion',ubicacion.findAll);
app.get('/ubicacion/:id',ubicacion.findById);
app.post('/ubicacion/',ubicacion.post)
app.put('/ubicacion/:id',ubicacion.put)
app.delete('/ubicacion/:id',ubicacion.deleteId)
//responsable
app.get('/responsable',responsable.findAll);
app.get('/responsable/:id',responsable.findById);
app.post('/responsable/',responsable.post)
app.put('/responsable/:id',responsable.put)
app.delete('/responsable/:id',responsable.deleteId)




app.listen(4000, ()=>{
    console.log("Hola");
})