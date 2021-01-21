const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.end("Hello world, I am the server");

});

//connection listening 
io.on("connection", (socket) => {
     /*//send response to client
    socket.emit("welcome" )*/

    socket.broadcast.emit("new-user", {title: "a user joined", joinDate: new Date()})

    socket.on("disconnect", () => console.log("a user disconnected"));
    socket.on("new-message", (message) => {
        console.log(message);
    })
});

http.listen(3000, () => {
    console.log("listening at 3000");
})