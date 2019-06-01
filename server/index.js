require("dotenv").config();
const express = require("express");
// const session = require("express-session");
const app = express();
app.use(express.json());
const massive = require("massive");
const controller = require("./controllers/controller");
const { CONNECTION_STRING } = process.env;
const { getHomes, postHome, updateHouse, deleteHouse } = controller;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db hit");
  })
  .catch(err => console.log(err));

app.post("/api/houses", postHome);
app.get("/api/houses", getHomes);
app.put("/api/houses/:id", updateHouse);
// app.delete("/api/houses/:id", deleteHouse);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listneing on port ${PORT}`));
