const { User } = require("../models");

const userData = [
    {
        user_id: "1",
        username: "theonly",
        email: "theonly@untouchable.com",
        password:"tough",
    },
    {
        user_id: "2",
        username: "logan",
        email: "logan@logan.com",
        password: "hahaha",
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;