const responsable = [
    {
        idResponsable : 31201,
        numeroDeEmpleado: 34566,
        nombre : 'Jose Antonio Rodriguez Perez',
        activosEnCustodia :  [124501,124502,124503],
        imagen : 'imagenAntonio.jpg'
    },
    {
        idResponsable : 31202,
        numeroDeEmpleado: 34565,
        nombre : 'Alejandro Rivas Reyes',
        activosEnCustodia :  [124504,12455,124506],
        imagen : 'imagenAlejandro.jpg'
    },
    {
        idResponsable : 31203,
        numeroDeEmpleado: 34564,
        nombre : 'Jose Emiliniano Cazares Chico',
        activosEnCustodia :  [124507,124508],
        imagen : 'imagenJEmiliano.jpg'
    },
    {
        idResponsable : 31204,
        numeroDeEmpleado: 34563,
        nombre : 'Manuel Renteria Rocobo',
        activosEnCustodia :  [124509,124510],
        imagen : 'imagenManuel.jpg'
    }
]


let findAll = function(){
    return responsable;
}
let findById = function(id){
    let index = getIndex(id)
    responsable.splice(index,1);
}
const deleteid = function(id){
    let index = getIndex(id)
    responsable.splice(index,1);
}

const post = function(objetoJson){
    responsable.push(objetoJson);
}
const getIndex = function(id){
   return responsable.findIndex((x) => x.idResponsable==id);
}
const put = function(id, objetoJson){
    let index = getIndex(id)
    responsable[index] = objetoJson;
}




export default{findAll, findById,deleteid,post,put};