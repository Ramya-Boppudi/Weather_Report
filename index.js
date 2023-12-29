const express = require("express");
const { WeatherTemplate } = require("./Handlers/Weatherhandlers.js");
const app = express();

const portNumber=3000;
app.get("/", async (req, res) => {
  const location = " vijayawada";
  await WeatherTemplate(location, res);

});
app.listen(portNumber, () => {
  console.log(`Server is running on port:", ${portNumber}`);
});