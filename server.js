// Douglas Aquilino       May 10, 2017
// basic express server to test time.


// Dependencies
// ===========================================================
var express = require("express");


var PORT = process.env.PORT || 9999;
var app = express();


// Routes
// ===========================================================
app.get("/", function(req, res) {
  	
	var time = new Date();
 	res.send("Current Server Time:  " + time + "     Hour: " + time.getHours());
});




// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
