const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000


app.use(express.static(__dirname + "/public"))
let clients = 0

//connecting front end and back end
io.on('connection', function(socket) {
    socket.on("NewClient", function() {
        if(clients < 2){
            if(clients == 1){
                this.emit('CreatePeer ')
            }
        }
    })
})