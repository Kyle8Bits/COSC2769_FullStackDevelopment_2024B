const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

const rooom1 = new Array();
const rooom2 = new Array();

wss.on('connection', function connection(ws) {
    
})