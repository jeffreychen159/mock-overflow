const express = require("express");
const Account = require("../models/accounts")

const router = express.Router();

// Adding account
const addAccount = async (req, res) => {
    const content = req.body;

    let newAccount = await Account.create({
        username: content.username, 
        password: content.password, 
        name: content.name
    })

    res.json(newAccount);

};

const authenticateAccount = async (req, res) => {
    const content = req.query;

    let account = await Account.findOne({username: content.username}, {password: content.password}).populate({path: "username"});

    if (account) {
        res.json(account.username);
    } else {
        res.json();
    }
}

// add appropriate HTTP verbs and their endpoints to the router.
router.post('/addAccount', addAccount); //adding account
router.get('/authenticateAccount', authenticateAccount);

module.exports = router;
