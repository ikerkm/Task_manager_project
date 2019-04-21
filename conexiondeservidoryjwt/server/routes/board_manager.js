const router = require('express').Router();

const Board = require('../models/board');

router.post('/save_board', (req, res) => {
    console.log("hello")
    /*  new Board(req.body)
          .save()
          .then(board => {
              res.send(board);
          })
          .catch(err => {
              res.status(400).send(err);
          });*/
});


module.exports = router;