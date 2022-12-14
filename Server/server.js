const express = require('express')
var cors = require('cors')
var app = express()
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);
const port = 4000;


app.use(cors())

//NameSpace
let buyNsp = io.of("/buy");
buyNsp.on('connection', function (socket) {
    buyNsp.emit('MyBroadcast', "Hello buy!!!")
})
//NameSpace
let sellNsp = io.of("/sell");
sellNsp.on('connection', function (socket) {
    sellNsp.emit('MyBroadcast', "Hello sell!!!")
})


io.on('connection', function (socket) {
    console.log("New User Connected");

    // setTimeout(function () {
    //     socket.send("Socket send this data (Server --------> Client)")
    // }, 3000)

    // setInterval(function () {
    //     let d = new Date();
    //     let t = d.toString('YYYY-MM-dd');
    //     socket.send(t)
    // }, 500)

    // // Custom Event 
    // setTimeout(function () {
    //     socket.emit("MyEvent", "This my custom Event")
    // }, 3000)

    // socket.on('disconnect', function () {
    //     console.log("User Disconnect");
    // })

    // socket.on('message', function (msg) {
    //     console.log(msg);
    // })


    // Broadcasting
    // io.sockets.emit('MyBroadcast', "Hello EveryOne!!!")

})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


expressServer.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}`)
})