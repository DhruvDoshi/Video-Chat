let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')
let client = {}

//lets get the video stream

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream => {
        socket.emit('NewClient')
    })
    .catch(err => document.write(err))