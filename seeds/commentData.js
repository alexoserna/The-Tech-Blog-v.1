const { Comment } = require("../models");

const commentData = [
    {
        comment_id: "1",
        comment: "Hey man this is really cool! I never would've expected this to work this way",
        user_id: "2",
        username: "logan",
        post_id: "1",
        date: "4/10/2023",
    },
    {
        comment_id: "2",
        comment: "lol good one",
        user_id: "1",
        username: "theonly",
        post_id: "2",
        date: "4/10/2023",
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;