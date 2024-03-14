const ubicacion = [
    {
        idDeLaUbicacion: 12301,
        Descripcion: "LaboratorioA",
        activosAsociados: [124501,124502,124503],
        imagenDeLaUbicacion: 'imagenLab.jpg' 
    },
    {
        idDeLaUbicacion: 12302,
        Descripcion: "Pasillo",
        activosAsociados: [124504,124505,124506],
        imagenDeLaUbicacion: 'imagenPasillo.jpg' 
    },
    {
        idDeLaUbicacion: 12303,
        Descripcion: "LaboratorioB",
        activosAsociados: [124507,124508],
        imagenDeLaUbicacion: 'imagenLabB.jpg' 
    },
    {
        idDeLaUbicacion: 12304,
        Descripcion: "Sala de estudio",
        activosAsociados: [124509,124510],
        imagenDeLaUbicacion: 'imagenSEstudio.jpg' 
    }

]


let findAll = function(){
    return ubicacion;
}
let findById = function(id){
    let index = getIndex(id)
    ubicacion.splice(index,1);
}
const deleteid = function(id){
    let index = getIndex(id)
    ubicacion.splice(index,1);
}

const post = function(objetoJson){
    ubicacion.push(objetoJson);
}
const getIndex = function(id){
   return ubicacion.findIndex((x) => x.idDeLaUbicacion==id);
}
const put = function(id, objetoJson){
    let index = getIndex(id)
    ubicacion[index] = objetoJson;
}




export default{findAll, findById,deleteid,post,put};