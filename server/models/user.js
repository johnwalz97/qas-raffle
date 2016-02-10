var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    email: String,
    tickets: Number,
    created_at: {type: Date, default: new Date().toString()}
})
var User = mongoose.model('User', UserSchema);