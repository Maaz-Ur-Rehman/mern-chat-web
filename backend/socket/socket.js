const {Server}= require('socket.io')
const http= require('http')
const express= require('express')

const app = express();


const server = http.createServer(app);

const io=  new Server(server,{
    cors: {
        origin: "https://mern-chat-web.vercel.app",
        methods: ["GET", "POST"],
    }
}); 

const userSocketMap={}
// console.log(userSocketMap);
const getReciverSockeId=(receiverId) =>{
    return userSocketMap[receiverId]
}

io.on('connection', (socket)=>{
    // console.log('a user con`nected',socket.handshake.query);
    const userId=socket.handshake.query.userId;
    // console.log(userId!="undefined","user connected");
    
    // console.log(userSocketMap,"userSocketMap")
    if(userId!="undefined"){
        userSocketMap[userId]=socket.id;
    }
    // console.log(userSocketMap,"userSocketMap")
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    socket.on('disconnect', ()=>{
        console.log('user disconnected',socket.id);
        delete userSocketMap[userId];
        io.emit("onlineUsers",Object.keys(userSocketMap));
    })
})
// console.log(server,"server")

module.exports ={app,io,server,getReciverSockeId};
