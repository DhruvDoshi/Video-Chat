let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')
let client = {}

//lets get the video stream

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream => {
        socket.emit('NewClient')
        video.srcObject = stream
        video.play()

        function InitPeer(type){
            let peer = new Peer({initiator: (type == 'init')? true : false })
        }
    })
    .catch(err => document.write(err))