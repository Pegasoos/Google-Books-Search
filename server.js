const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express();

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

  app.listen(PORT, async () => {
   await console.log(`Listening at http//:localhost:${PORT}!`)
  })
  mongoose.connection.on('connected', () => console.log('Connected!'));