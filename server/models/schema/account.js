const mongoose = require("mongoose");

// Schema for Account
module.exports = mongoose.Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
        votedQuestions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}], 
        votedAnswers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}], 
    },
    { collection: "Account" }
);
