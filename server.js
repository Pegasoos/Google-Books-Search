const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  };

    // Define API routes here

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Listening at http//:localhost${PORT}!`);
  });