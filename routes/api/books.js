const express = require('express');
const router = express.Router();
const bookCtrl = require('../../controllers/api/books');
// const checkToken = require('../../config/checkToken');

router.get('/', bookCtrl.getBooks);
router.delete('/', bookCtrl.deleteBooks);

module.exports = router;
