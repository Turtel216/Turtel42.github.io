const express = require("express");

//set up express app
const app = express();

app.use(express.static('public'));

//listen for requests
app.listen(process.env.port || 80, () => {
    console.log("listening for request");
});