const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
const { format_date } = require('../../utils/helpers');

router.post('/', withAuth, async (req, res) => {
  let currentDate = format_date(Date());

  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      username: req.session.username,
      date: currentDate,
    });
    res.json(newComment);
  } catch (err) {
    console.log('Straight to catch');
    res.status(500).json(err);
  }
});

module.exports = router;
