
import { json } from "express";
import activo from "../modelos/activoModel.js"

const findAll = async function(req, res) {
    let variable = await json(activo.findAll())
    res.send(activo.findAll()); 
};

const findById = async function(req, res){
    
    res.send(activo.findById(req.params.id))
};

export default{findAll,findById};