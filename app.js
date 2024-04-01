
import express from 'express'
import https from 'https'
import fs from 'fs'
import cors from 'cors'

const llavePrivada = fs.readFileSync("server.key");
const certificado = fs.readFileSync("server.cer")
const credenciales = {
    key:llavePrivada,
    cert: certificado
    //No use llave privada 
}

const app = express();
app.use(cors())


import activo from './Route/activos.js' //Se manda a llamar a todos las controladores
import ubicacion from './Route/ubicacion.js'
import responsable from './Route/responsable.js'
app.use(express.json());

//Activo
app.use("/activo",activo);
//ubicacion
app.use("/ubicacion",ubicacion);
//responsable
app.use("/responsable",responsable);

process.env.port = 4001;
const httpsServer = https.createServer(credenciales,app);
httpsServer.listen(process.env.port,()=>{
    console.log("Servidor https escuchando puerto: ", process.env.port);
}).on('Error',err=>{
    console.log("Error al iniciar servidor",err);
})