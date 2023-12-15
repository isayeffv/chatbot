const expresso=require("express");
const app=expresso();
const http=require("http");
const sw=http.createServer(app);
const {Server}=require("socket.io");
const io = new Server(sw);

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on('connection', (socket)=>{
  io.emit("new", "");
    socket.on("disconnect", ()=>{
        console.log("disconnected player id: "+ socket.id);
  io.emit("newdc", "");
    });
    socket.on("chat message", (msg)=>{
        io.emit("chat message", msg);
    });
      socket.on("typing", (msg)=>{
        io.emit("typing", msg);
    })
      socket.on("untyping", (msg)=>{
        io.emit("untyping", msg);
    });
        socket.on("giren", (msg)=>{
        io.emit("giren", msg);
    })
});

sw.listen(3000,()=>{
    console.log("3000 Listening...")
});