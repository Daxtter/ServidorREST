import ubicacion from "../modelos/ubicacionModel.js"


const findAll = async function(req, res) {
    let valor = await ubicacion.findAll() 
    await res.json(valor); 
};

const findById = async function(req, res){
    let valor = await ubicacion.findById(req.params.id)
    await res.json(valor)
};
const deleteId = async function(req,res){
    await ubicacion.deleteid(req.params.id);
    let valor = await ubicacion.findAll() 
     await res.json(valor); 
}
const post = async function(req,res){
    let objetoJson= req.body;
    await ubicacion.post(objetoJson);
    let valor = await ubicacion.findAll() 
    await res.json(valor);

}
const put = async function(req,res){
    let objetoJson= req.body;
    await ubicacion.put(req.params.id,objetoJson);
    let valor = await ubicacion.findAll();
    await res.json(valor)
};

export default{findAll,findById,deleteId,post,put};