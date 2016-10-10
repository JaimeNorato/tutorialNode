/**
 * Created by jaime on 10/10/16.
 */
var http=require("http"),
    fs=require("fs");

http.createServer(function(req,res) {
    /** se detecta si la url solicitada es la del favicon y si es asi no se continua con la ejecucion normal */
    if(req.url.indexOf("favicon.ico")>0){return;}
    fs.readFile("./index.html",function(err,html) {
        var html_string=html.toString();
        var parametros={};
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre="Coco";
        if(req.url.indexOf("?")>0){
            var url_data=req.url.split("?");
            var arreglo_parametros=url_data[1].split("&");
            /** [nombre=Uriel,data=algo] */
            for(var i=arreglo_parametros.length-1;i>=0;i--){
                var parametro=arreglo_parametros[i];
                /** nombre=uriel */
                var param_data=parametro.split("=")
                /** {nombre,uriel} */
                parametros[param_data[0]]=param_data[1];
                /** {nombre:uriel} */
            }

        }

        for(var i=variables.length-1;i>=0;i--){
            var variable=variables[i];
            /** Remplaza el conbtenido con llaves {x} por su valor correspondiente */
            html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);/** se envia respuesta al cliente, por pedasos */
        res.end();/** finaliza el canal de comunicacion entre el servidor y el navegador(cliente) */
    });
}).listen(8080);