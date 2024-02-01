const express = require('express');
const router = express.Router();
const favCtrl = require('../../controllers/api/favorites');

router.post('/', favCtrl.addToFav);

module.exports = router;
