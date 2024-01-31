const express = require('express');
const router = express.Router();
const favCtrl = require('../../controllers/api/favourites');

router.post('/', favCtrl.addToFav);

module.exports = router;
