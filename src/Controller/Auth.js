const fs = require("fs");

class AuthController {

    signup(req, res) {
        const { email, password } = req.body;

        fs.readFile("db.json", "utf-8", (error, data) => {
            if (error) {
                throw new Error("Failed to read file")
            } else {
                const parsedData = JSON.parse(data);
                if (req.body.email === parsedData.email) {
                    console.log("Account already exist");
                } else  {
                    fs.appendFile(
                        "db.json",
                        `{"email":"${email}", "password":"${password}"}`,
                        (err) => {
                            if (err) {
                                throw new Error("Failed to write to file");
                            } else {
                                res.status(201).json({ msg: "Account is created" })
                                console.log("Database has been updated");
                            }
                        }
                    );
                }
            }
        });
        
    }

    signin(req, res) {
        const { email, password } = req.body;
        fs.readFile("db.json", "utf8", (error, data) => {
            if (error) {
                throw new Error("Failed to read file")
            } else {
                const parsedData = JSON.parse(data);
                if (req.body.email === parsedData.email &&
                    req.body.password === parsedData.password) {
                    console.log("Welcome user");
                    res.status(200).json(parsedData);
                } else {
                    console.log("invalid user account");
                }
            }
        });
    }
}

module.exports = AuthController;