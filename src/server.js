const express = require("express");
const AuthRoute = require("./Routes/auth");

const server = express();

server.use(express.urlencoded({extended: false}))

server.use(AuthRoute);

server.listen(4321, () => {
    console.log("Server is running on port");
})