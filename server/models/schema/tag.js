const mongoose = require("mongoose");

module.exports = mongoose.Schema(
    {
        // add relevant properties.
        // id: {type: String}, 
        name: {type: String, required: true}, 
    },
    { collection: "Tag" }
);
