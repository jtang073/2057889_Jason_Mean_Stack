let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require('socket.io')(http);
let resArray = ["Hello, I am the Server.", "Today is normal like everyday. How about you?", "Sorry I don't understand you. I am just a robot.", "Okay, goodbye!", "Please stop talking to me. I said goodbye already."]
let resIndex = 0;
let stopMsg = "Stop";

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\/index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    socket.on("obj",(msg)=> {
        console.log("From client: " + msg);
        if (resIndex < 5) {
            socket.emit("obj1",resArray[resIndex]);
            ++resIndex;
        }
        else {
            socket.emit("obj1",stopMsg);
            stopMsg += "!";
        }
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));