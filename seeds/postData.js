const { Post } = require("../models");

const postData = [
    {
        post_id: "1",
        title: "My fun fact",
        content: "Ever wonder how the universe can simultaniously be created and destroyed at the same time? everytime you bling it ceases to exist",
        user_id: "1",
        username: "theonly",
        date: "4/8/2023",
    },
    {
        post_id: "2",
        title: "My busy fact",
        content: "Haha funny hahaha",
        user_id: "2",
        username: "logan",
        date: "4/9/2023",
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;