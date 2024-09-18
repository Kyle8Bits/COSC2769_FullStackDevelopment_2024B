const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = {}; // Store clients by username

wss.on('connection', (ws) => {
    let username;

    // When a message is received from a client
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        // Handle new connection with username
        if (data.type === 'connect') {
            username = data.username;
            clients[username] = ws;

            // Send updated user list to all clients
            broadcastUserList();
        }

        // Handle sending a private message
        if (data.type === 'private_message') {
            const targetUser = data.to;
            const msg = data.message;

            if (clients[targetUser]) {
                // Forward the message to the target user
                clients[targetUser].send(JSON.stringify({
                    type: 'private_message',
                    from: username,
                    message: msg
                }));
            }
        }
    });

    // When a client disconnects
    ws.on('close', () => {
        delete clients[username];
        broadcastUserList(); // Update the list of users when someone disconnects
    });
});

// Function to broadcast the list of connected users
function broadcastUserList() {
    const usernames = Object.keys(clients);
    const userListMessage = JSON.stringify({
        type: 'user_list',
        usernames: usernames
    });

    // Send the updated user list to all connected clients
    usernames.forEach(user => {
        clients[user].send(userListMessage);
    });
}

console.log('WebSocket server is running on ws://localhost:8080');
