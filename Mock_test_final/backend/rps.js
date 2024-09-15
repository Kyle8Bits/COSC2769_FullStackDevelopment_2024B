const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

const room = new Set();

let playId = 1;

wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
  
    room.add(ws);
    console.log("Connected:", room.size);
    
    ws.id = playId;
    playId++;

    if (room.size === 2) {
      // Notify all players that the game has started
      room.forEach(client => {
        if (client.readyState === client.OPEN) {
          client.send('Round 1');
        }
      });
    }

    ws.on("message", function message(data){
        data = `${data}`
        console.log(data);
        console.log("Player", ws.id)
      })
    

  
    ws.on("close", function close() {
      room.delete(ws);
      playId--;
      console.log("Disconnected:", room.size);
    });
  });
  

  const checkWiner = (a,b) =>{

  }


