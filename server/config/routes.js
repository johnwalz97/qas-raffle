//Variables
var users = require("../controllers/users.js");

//export module
module.exports = function(app){
    //Routes
    app.get("/", function(req, res){
        res.render('index');
    })

    app.post("/charge", function(req, res) {
        users.pay(req,res);
    });
}