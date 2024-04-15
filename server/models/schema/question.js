const mongoose = require("mongoose");

// Schema for questions
module.exports = mongoose.Schema(
    {
        // define the relevant properties.
        // id: {type: String}, 
        title: {type: String, required: true, maxLength: 100}, 
        text: {type: String}, 
        asked_by: {type: String}, 
        answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}], 
        tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}], 
        ask_date_time: {type: Date, required: true}, 
        views: {type: Number, required: true}, 
    },
    { collection: "Question" }
);
