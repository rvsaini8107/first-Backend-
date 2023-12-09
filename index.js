// console.log("ShriGaneshNamha");
require("dotenv").config(); 
const express = require("express");
const app = express();
const PORT =  3000;

app.get("/",(req,res)=>{
    res.send("Ram Ram sariyana ")
})
app.listen(PORT, ()=>{
    console.log("Ram Ram sariyana ap ka Post No ",PORT)
})