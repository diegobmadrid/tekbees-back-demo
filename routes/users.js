const { Router, request, response } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
    console.log("Request made to /USERS ROUTE");
    next();
})

router.post("/", async (req = request, res = response) => {
    const { username, password } = req.body;
    if (username && password) {
        try {
            const response = await db.promise().query(`SELECT * FROM user WHERE username='${username}' AND password='${password}'`);
            if (response[0].length !== 0) {
                res.status(200).send({ status: 200, data: response[0] });
            } else {
                res.status(500).send({ status: 500, data: "No se encontro un admin con sus datos" });
            }
        } catch (error) {
            console.log(error)
        }

    }
})


module.exports = router;