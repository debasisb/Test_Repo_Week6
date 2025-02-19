//edited from bmi calcuator
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/VolCalculator", function(req, res) {
  res.sendFile(__dirname + "/VolCalculator.html");
});


app.post("/VolCalculator", function(req, res) {

  //ai used to fix next two rows, parseInt wasnt functioning for radius, didn't catch why at first
  var radius = parseFloat(req.body.radius);
  var height = parseFloat(req.body.height);

  // calculates the volume of a cylinder
  var volume = Math.PI * Math.pow(radius, 2) * height;

  //displays result in 2 decimal places
  res.send("The Volume of the cylinder is " + volume.toFixed(2) + " units cubed");

});
//ai used below to fix code, 3000 was set to 0 and didn't realize this when i was testing this on my desktop
app.listen(3000, function() {
  console.log("Server is running on port 3000")
});