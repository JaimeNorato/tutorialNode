/**
 * Created by jaime on 12/10/16.
 */
function parse(req) {
    var parametros={};

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

    return parametros;
}

module.exports.parse=parse;