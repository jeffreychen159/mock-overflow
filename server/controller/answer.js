const express = require("express");
const Answer = require("../models/answers");
const Question = require("../models/questions");

const router = express.Router();

// Adding answer
const addAnswer = async (req, res) => {
    const qid = req.body.qid;
    let content = req.body.ans;

    let a = await Answer.create(content);

    await Question.findOneAndUpdate({_id: qid}, {$push : {answers: {$each: [a._id], $position: 0}}}, {new: true});

    res.json(a);

};

// add appropriate HTTP verbs and their endpoints to the router.
router.post('/addAnswer', addAnswer);

module.exports = router;
