const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

const room = new Set();

let playId = 1;

let round = 1;

const plays = [];

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
          client.send(`Round ${round}`);
        }
      });
    }

    ws.on("message", function message(data) {
        const playerMove = data.toString(); // 'R', 'P', 'S'
        plays.push({ data: playerMove, id: ws.id });
        console.log(`Player ${ws.id} chose ${playerMove}`);
        // If both players have made their move
        if (plays.length === 2) {
          console.log("Both players have made their move");
            round++;
            const result = checkWinner(plays);
            console.log("Game result:", result);
            // Send the result to both players
            room.forEach(client => {
                if (client.readyState === client.OPEN) {
                    client.send(`${result} round ${round} start`);
                    client.send(`Round ${round}`);
                }
            });

            // Reset the game state for the next round
            plays.length = 0; // Clear the plays array
            
        }
    });
  
    ws.on("close", function close() {
      room.delete(ws);
      playId--;
      console.log("Disconnected:", room.size);
    });
  });
  

  const checkWinner = (plays) =>{
    console.log(plays);
    const player1 = plays[0].data;
    const player2 = plays[1].data;
    if(player1 === player2){
        return "Draw";
    }
    if(player1 === "R" && player2 === "S"){
        return "Player 1 win";
    }
    if(player1 === "R" && player2 === "P"){
        return "Player 2 win";
    }
    if(player1 === "S" && player2 === "R"){
        return "Player 2 win";
    }
    if(player1 === "S" && player2 === "P"){
        return "Player 1 win";
    }
    if(player1 === "P" && player2 === "R"){
        return "Player 1 win";
    }
    if(player1 === "P" && player2 === "S"){
        return "Player 2 win";
    }
  }


