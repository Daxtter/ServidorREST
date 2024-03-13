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

import express from 'express'
//const express = require('express')
const app = express();
//const activo= require('./Controladores/activoControllador.js')
import activo from './Controladores/activoControllador.js'
app.get('/activo',activo.findAll);
app.get('/activo/:id',activo.findById);
app.listen(4000, ()=>{
    console.log("Hola");
})