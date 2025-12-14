// Here we will make our http server and websocket server

//import express -> ES Module
// "type": "module" means → ES Modules
import express from "express";

// Websocket server
import { WebSocketServer } from "ws";

//create app
const app = express()

// define port
const PORT = 4000;

//create a basic route
app.get("/", (req, res) => {
    res.send("Hello to Vinayak's Server on PORT " + PORT);  
})

//create server
const server = app.listen(PORT, () => {
    console.log("Server running on PORT: ", PORT);
})

//now we will create the websocket server
const wss = new WebSocketServer({ server });

// listen for websocket connections
wss.on("connection", (ws, req) => {
  ws.on('error', console.error);

  console.log("New WebSocket client connected");

  const ip = req.socket.remoteAddress;
  console.log("IP address of user= ", ip);

  // receive message from client
  ws.on("message", (message) => {
    console.log("Received:", message.toString());

    // send message back
    ws.send(`Server received: ${message}`);
    console.log("Server sent: ", message.toString())
  });

  // client disconnect
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});