const express = require("express");

const usersRouter = require("./routes/users");

const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hola mundo!");
})

app.use("/users", usersRouter);


app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
})