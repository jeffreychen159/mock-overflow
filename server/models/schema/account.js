const mongoose = require("mongoose");

// Schema for Account
module.exports = mongoose.Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
    },
    { collection: "Account" }
);
