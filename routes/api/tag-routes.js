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
    tag_name: req.body.tag_name,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data[0]) {
        return res.status(404).json({ msg: "no such tag" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

module.exports = router;
