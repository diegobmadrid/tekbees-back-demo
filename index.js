const express = require("express");
const app = express();
let PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.send("Hola mundo!");
})

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
})