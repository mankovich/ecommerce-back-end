const express = require('express')
const router = express.Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
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
  Category.findByPk(req.params.id, {
    include: [ {model: Product} ],
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: "no such category" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
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
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data[0]) {
        return res.status(404).json({ msg: "no such category" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", err });
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
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
