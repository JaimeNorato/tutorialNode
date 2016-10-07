/**
 * Created by jaime on 7/10/16.
 */
/**
 * Created by jaime on 7/10/16.
 */
var http=require("http");
var manejador=function (solicitud, respuesta) {
    console.log("Resibimos una peticion");
    respuesta.end("Hola mundo");
};

var servidor=http.createServer(manejador);

servidor.listen(8080);
