var stripe = require('stripe')("sk_test_4XDZNs3tbkIKnGeGPcUP6mXX");
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    pay: function(req, res) {
        var token = req.body.token;
        var charge = stripe.charges.create({
            amount: req.body.price,
            currency: "usd",
            card: token.id,
            description: token.email
        }, function(err, charge) {
            if (err && err.type === 'StripeCardError') {
                console.log("card declined");
                res.json({err: "Card was declined"})
            } else {
                var user = new User();
                user.email = req.body.token.email;
                user.tickets = req.body.amount;
                user.save(function(err){
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({good: "true"});
                    }
                })
            }
        });
    },
}