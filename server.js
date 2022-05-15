const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;
const cors = require('cors')

const app = express();
app.use(cors());
//Setup HTTP Server and Socket.io
const server = require('http').createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } }); 

const mongoose = require("mongoose");

const apiRoutes = require('./controllers/apiRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  };
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

  app.use('/api', apiRoutes);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  server.listen(PORT, async () => {
    console.log(`Listening at http//:localhost:${PORT}!`)
  });
//Socket.io Connection to Display Alerts
  io.on("connection", (socket) =>{
    console.log(`User Connected ${socket.id}`);

    socket.on("save_book", (title) =>{
      console.log(title.message)//this runs
      socket.broadcast.emit("book_alert", title)
    });
  })