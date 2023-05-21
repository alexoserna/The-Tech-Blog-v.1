const { Post } = require("../models");

const postData = [
    {
        post_id: "1",
        title: "The Mind-Blowing Concept of Simultaneous Creation and Destruction in the Universe",
        content: "Have you ever pondered the mind-bending notion of the universe being created and destroyed simultaneously? ",
        user_id: "1",
        username: "theonly",
        date: "4/8/2023",
    },    
    {
        post_id: "2",
        title: "Unveiling the Enigmatic Realm of Technological Marvels",
        content: "In the fast-paced world of technology, there's always something fascinating and mind-boggling happening. And yet we remain too serious",
        user_id: "2",
        username: "logan",
        date: "4/9/2023",
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;