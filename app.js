const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from my Node app</h1>");
});

app.get("/:user",(req,res)=>{
	res.send("Hello "+$(user));
})

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
