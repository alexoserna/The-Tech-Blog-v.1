const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
const { format_date } = require('../../utils/helpers');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  let currentDate = format_date(Date());

  try {
    const newPost = await Post.create({ ...body, user_id: req.session.user_id, username: req.session.username, date: currentDate});
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log('in the try!!!');
    const [affectedRows] = await Post.update(req.body, {
      where: {
        post_id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        post_id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
