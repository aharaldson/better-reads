const express = require('express');
const router = express.Router();
const shelfCtrl = require('../../controllers/api/shelves');

router.post('/', shelfCtrl.addToShelf);

module.exports = router;
