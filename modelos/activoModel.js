const activo =[
    {
        idActivo: 124501,
        numeroDeSerie : 2134501,
        numeroDeInventarioUABC: 6123401,
        tipoDeActivo: 'Computadora',
        Descripcion: 'Computadora muy eficaz que pueda',
        Ubicacion: 12301,
        Responsable : 31201,
        imagenAsociadaAlActivo: 'imagenConputadora.jpg' 
    },
    {
        idActivo: 124502,
        numeroDeSerie : 2134502,
        numeroDeInventarioUABC: 6123402,
        tipoDeActivo: 'Escritorio',
        Descripcion: 'Escritorio diseñado especificamente para el uso de computadoras por largo tiempo',
        Ubicacion: 12301,
        Responsable : 31201,
        imagenAsociadaAlActivo: 'imagenEscritorio.jpg' 
    },
    {
        idActivo: 124503,
        numeroDeSerie : 2134503,
        numeroDeInventarioUABC: 6123403,
        tipoDeActivo: 'Modem',
        Descripcion: 'Modem para que la conexion del laboratorio sea eficiente',
        Ubicacion: 12301,
        Responsable : 31201,
        imagenAsociadaAlActivo: 'imagenModem.jpg' 
    },
    {
        idActivo: 124504,
        numeroDeSerie : 2134504,
        numeroDeInventarioUABC: 6123404,
        tipoDeActivo: 'Bote de la basura',
        Descripcion: 'Es importante mantener el lugar limpio',
        Ubicacion: 12302,
        Responsable : 31202,
        imagenAsociadaAlActivo: 'imagenBoteDeBasura.jpg' 
    },
    {
        idActivo: 124505,
        numeroDeSerie : 2134505,
        numeroDeInventarioUABC: 6123405,
        tipoDeActivo: 'Trapeador',
        Descripcion: 'Un Trapeador extra absorbente',
        Ubicacion: 12302,
        Responsable : 31202,
        imagenAsociadaAlActivo: 'imagenTrapeador.jpg' 
    },
    {
        idActivo: 12456,
        numeroDeSerie : 2134506,
        numeroDeInventarioUABC: 6123406,
        tipoDeActivo: 'Conjunto de 4 Casilleros',
        Descripcion: 'Cada casillero mide aproximadamente 60x60x60 cm',
        Ubicacion: 12302,
        Responsable : 31202,
        imagenAsociadaAlActivo: 'imagenCasilleros.jpg' 
    },
    {
        idActivo: 124507,
        numeroDeSerie : 2134507,
        numeroDeInventarioUABC: 6123407,
        tipoDeActivo: 'Pizarron',
        Descripcion: 'Pizarron ecologico',
        Ubicacion: 12303,
        Responsable : 31203,
        imagenAsociadaAlActivo: 'imagenPazarron.jpg' 
    },
    {
        idActivo: 124508,
        numeroDeSerie : 2134508,
        numeroDeInventarioUABC: 6123408,
        tipoDeActivo: 'Proyector',
        Descripcion: 'Calidad de imagen 720p',
        Ubicacion: 12303,
        Responsable : 31203,
        imagenAsociadaAlActivo: 'imagenProyector.jpg' 
    },
    {
        idActivo: 124509,
        numeroDeSerie : 2134509,
        numeroDeInventarioUABC: 6123409,
        tipoDeActivo: 'Silla',
        Descripcion: 'Silla ergonomica',
        Ubicacion: 12304,
        Responsable : 31204,
        imagenAsociadaAlActivo: 'imagenSilla.jpg' 
    },
    {
        idActivo: 124510,
        numeroDeSerie : 2134510,
        numeroDeInventarioUABC: 6123410,
        tipoDeActivo: 'Ventilador',
        Descripcion: 'ventilador sencillo',
        Ubicacion: 12304,
        Responsable : 31204,
        imagenAsociadaAlActivo: 'imagenVentilador.jpg' 
    }

];


const findAll = function(){

    return activo;
}
const findById = function(id){
    return activo.find((a)=>a.idActivo==id);
}

const deleteid = function(id){
    let index = getIndex(id)
    activo.splice(index,1);
}

const post = function(objetoJson){
    activo.push(objetoJson);
}
const getIndex = function(id){
    console.log(id)
   return activo.findIndex((x) => x.idActivo==id);
}
const put = function(id, objetoJson){
    let index = getIndex(id)
    activo[index] = objetoJson;
}

export default{findAll, findById,deleteid,post,put};