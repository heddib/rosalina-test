const io = require('socket.io-client');

let socket = io('wss://rosalina-server.herokuapp.com/')
// let socket = io('http://127.0.0.1:3000/')

socket.on('connect', function () {
    console.log('Connected to Rosalina')
    socket.emit('join', 'Rosalina')

var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8')

// Prompt user to input data in console.
console.log("Merci d'envoyer un message.")

// When user input data and click enter key.
standard_input.on('data', function (data) {
    socket.emit('message', data)
})
})