
import responsable from "../modelos/responsableModel.js"


const findAll = async function(req, res) {
    let valor = await responsable.findAll() 
    await res.json(valor); 
};

const findById = async function(req, res){
    let valor = await responsable.findById(req.params.id)
    await res.json(valor)
};
const deleteId = async function(req,res){
    await responsable.deleteid(req.params.id);
    let valor = await responsable.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson= req.body;
    await responsable.post(objetoJson);
    let valor = await responsable.findAll() 
    await res.json(valor);

}
const put = async function(req,res){
    let objetoJson= req.body;
    await responsable.put(req.params.id,objetoJson);
    let valor = await responsable.findAll();
    await res.json(valor)
};

export default{findAll,findById,deleteId,post,put};