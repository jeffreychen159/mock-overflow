const express = require("express");
const Question = require("../models/questions");
const Answer = require("../models/answers");
const { addTag, getQuestionsByOrder, filterQuestionsBySearch } = require('../utils/question');
const tag = require("../models/schema/tag");

const router = express.Router();

// To get Questions by Filter
const getQuestionsByFilter = async (req, res) => {
    let content = req.query;
    
    let f = await getQuestionsByOrder(content.order);

    let s = await filterQuestionsBySearch(f, content.search);

    res.send(s);
};

// To get Questions by Id
const getQuestionById = async (req, res) => {
    let question = await Question.findOneAndUpdate({_id: req.params.qid}, {$inc: {views: 1}}).populate({path: 'answers'});
    
    res.send(question);
};

// To add Question
const addQuestion = async (req, res) => {
    let content = req.body;

    let tagIdList = [];

    for (let t of content.tags) {
        tagIdList.push(await addTag(t));
    }

    let newQuestion = await Question.create({
        title: content.title,
        text: content.text,
        asked_by: content.asked_by, 
        answers: content.answers, 
        tags: tagIdList, 
        ask_date_time: new Date(),
        views: 0,
    });

    res.json(newQuestion);
};

// add appropriate HTTP verbs and their endpoints to the router
router.get('/getQuestion', getQuestionsByFilter);
router.get('/getQuestionById/:qid', getQuestionById);
router.post('/addQuestion', addQuestion);  // adding a question

module.exports = router;
