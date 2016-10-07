/**
 * Created by jaime on 7/10/16.
 */
var http=require("http"),
    fs=require("fs");

/*
 programacion syncrona
var html=fs.readFileSync("./index.html"); -- programacion syncrona
 */

/*
 se usa aparte  cuando es programacion syncrona
 http.createServer(function(reg,res) {
 res.write(html);
 res.end();
 }).listen(8080);
 */

/** programacion asyncrona */
/** forma 1 */
/*fs.readFile("./index.html",function(err,html) {
    http.createServer(function(reg,res) {
        res.write(html);
        res.end();
    }).listen(8080);
});

/** forma 2 */

http.createServer(function(reg,res) {
    fs.readFile("./index.html",function(err,html) {
        /** enviando datos en formato json */
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify({nombre:"Uriel",username:"urieles"}));/** se envia respuesta al cliente, por pedasos */
        res.end();/** finaliza el canal de comunicacion entre el servidor y el navegador(cliente) */
    });
}).listen(8080);
