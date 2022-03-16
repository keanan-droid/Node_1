const { Router, json } = require("express");
const AuthController = require("../Controller/Auth");

const router = Router();
const Controller = new AuthController();

router.post("/api/signup", json(), (req, res) => {
    Controller.signup(req, res);
})

router.post("/api/signin", json(), (req, res) => {
    Controller.signin(req, res);
})

module.exports = router;