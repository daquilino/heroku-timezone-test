// Douglas Aquilino       May 10, 2017
// basic express server to test time.


// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;



// Routes
// ===========================================================
app.get("/", function(req, res) {
  	
	var time = "some time";
 	res.send("Current Server Time\n", );
});




// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
