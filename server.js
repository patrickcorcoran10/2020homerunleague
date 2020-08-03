const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const db = require("./models");

// require("./routes/homerun-db-routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// db.sequelize.sync().then(function () {
app.listen(PORT, function () {
  console.log("We are swinging for the fences at ", PORT);
});
// });
