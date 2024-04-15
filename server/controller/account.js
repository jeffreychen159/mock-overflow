const express = require("express");
const Account = require("../models/accounts")

const router = express.Router();

// Adding account
const addAccount = async (req, res) => {
    const content = req.body;

    console.log(content);

    let newAccount = await Account.create({
        username: content.username, 
        password: content.password, 
        name: content.name
    })

    res.json(newAccount);

};

// add appropriate HTTP verbs and their endpoints to the router.
router.post('/addAccount', addAccount); //adding account

module.exports = router;
