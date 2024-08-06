const express = require('express')
const router = express.Router();
const apiRoutes = require('./api');

// const tagRoutes = require('./api/tag-routes');
// router.use('/api/tags', tagRoutes);

// const categoryRoutes = require('./api/category-routes');
// router.use('/api/categories', categoryRoutes);

// const productRoutes = require('./api/product-routes');
// router.use('/api/products', productRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;