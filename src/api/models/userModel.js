const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ["uploader", "reviewer", "admin"],
    },
    token: String
});

module.exports.User = model("User", userSchema);
