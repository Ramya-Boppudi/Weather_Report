const express = require("express");
const { WeatherTemplate } = require("./Handlers/Weatherhandlers.js");
const app = express();

const portNumber=3000;
// when the page loads it will defaultly show the weather report of New York location and here no request is given
app.get("/", async (req, res) => {
  const location = "Tamil nadu";
  await WeatherTemplate(location, res);

});
app.listen(portNumber, () => {
  console.log(`Server is running on port:", ${portNumber}`);
});