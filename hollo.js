/**
 * Created by jaime on 7/10/16.
 */
/**
 * Created by jaime on 7/10/16.
 */
var http=require("http");
var manejador=function (solicitud, respuesta) {
    console("Hola mundo");
};

var server=http.createServer(manejador());
