const express = require('express')
const router = express.Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [ {model: Product} ]
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err});
    });
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [ {model: Product} ],
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: "no such tag" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.post('/', (req, res) => {
  Tag.create({

  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
