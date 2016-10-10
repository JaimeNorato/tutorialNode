var http=require("http"),
    fs=require("fs");

http.createServer(function(reg,res) {
    fs.readFile("./index.html",function(err,html) {
        var html_string=html.toString();
        /** Expresion regular q busca en el html donde haya {x} */
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre="Coco";
        /** variable ['nombre',..} */
        for(var i=variables.length-1;i>=0;i--){
            /** Lo ejecutamos como codigo javaScript, para obtener el valor de dicha variable */
            var value=eval(variables[i]);
            /** Remplaza el conbtenido con llaves {x} por su valor correspondiente */
            html_string=html_string.replace("{"+variables[i]+"}",value);
        }
        /** envia el contenido */
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);/** se envia respuesta al cliente, por pedasos */
        res.end();/** finaliza el canal de comunicacion entre el servidor y el navegador(cliente) */
    });
}).listen(8080);