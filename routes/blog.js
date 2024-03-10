const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('posts-list');
  });

router.get('/posts', (req, res) => {
  res.render('posts-list');
});

router.post('/posts', (req, res) => {
  res.send('Create a new post');
});

router.get('/posts/:id', (req, res) => {
  res.send(`Get post with id: ${req.params.id}`);
});

router.put('/posts/:id', (req, res) => {
  res.send(`Update post with id: ${req.params.id}`);
});

router.delete('/posts/:id', (req, res) => {
  res.send(`Delete post with id: ${req.params.id}`);
});

module.exports = router;
