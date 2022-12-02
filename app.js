const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url =
  "mongodb+srv://3DWave:threedwave@cluster0.jndki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//mongoose.connect(url, {useNewUrlParser:true})
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to Database")
);

const con = mongoose.connection;

con.on("open", () => { 
  console.log("3DWave connected...");
});

app.use(express.json());
app.use(function (req, res, next) {
  //Enabling CORS
  //ADD TO GIT
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });
const siteRouter = require("./routes/sites");
app.use("/sites", siteRouter);


var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || "0.0.0.0";
app.listen(server_port, server_host, function () {
  console.log("Listening on port %d", server_port);
});
