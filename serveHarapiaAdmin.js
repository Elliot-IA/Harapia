const express = require("express"); 
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, ".")));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

function c(s){console.log(s)}

console.log("Server Initiated! Working Directory (for server js file):"+path.join(__dirname, "."));

const PORT = process.env.PORT || 2700;
app.listen(PORT, function(){
    console.log("Server started on port 2700");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/hariapiaInput.html");
});