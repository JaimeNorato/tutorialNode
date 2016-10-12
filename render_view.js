/**
 * Created by jaime on 12/10/16.
 */
function render(html,parametros) {
    var variables = html.match(/[^\{\}]+(?=\})/g);
    for(var i=variables.length-1;i>=0;i--){
        var variable=variables[i];
        /** Remplaza el conbtenido con llaves {x} por su valor correspondiente */
        html=html.replace("{"+variables[i]+"}",parametros[variable]);
    }
    return html;
}
module.exports.render=render;