/**
 * Created by jaime on 10/10/16.
 */
var http=require("http"),
    fs=require("fs"),
    parser=require("./params_parser"),
    render=require("./render_view");

    var p=parser.parse;
    var r=render.render;

http.createServer(function(req,res) {
    /** se detecta si la url solicitada es la del favicon y si es asi no se continua con la ejecucion normal */
    if(req.url.indexOf("favicon.ico")>0){return;}
    fs.readFile("./index.html",function(err,html) {
        var html_string=html.toString();
        var nombre="Coco";
        var parametros=p(req);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(r(html_string,parametros));/** se envia respuesta al cliente, por pedasos */
        res.end();/** finaliza el canal de comunicacion entre el servidor y el navegador(cliente) */
    });
}).listen(8080);