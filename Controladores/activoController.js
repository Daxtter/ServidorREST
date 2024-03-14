
import activo from "../modelos/activoModel.js"


const findAll = async function(req, res) {
    let valor = await activo.findAll() 
    res.json(valor); 
};

const findById = async function(req, res){
    let valor = await activo.findById(req.params.id)
    await res.json(valor)
};
const deleteId = async function(req,res){
    await activo.deleteid(req.params.id);
    let valor = await activo.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson= req.body;
    await activo.post(objetoJson);
    let valor = await activo.findAll() 
    await res.json(valor);

}
const put = async function(req,res){
    let objetoJson= req.body;
    await activo.put(req.params.id,objetoJson);
    let valor = await activo.findAll();
    await res.json(valor)
};

export default{findAll,findById,deleteId,post,put};