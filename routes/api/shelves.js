const express = require('express');
const router = express.Router();
const shelfCtrl = require('../../controllers/api/shelves');
const checkToken = require('../../config/checkToken');

router.put('/:bookISBN', checkToken, shelfCtrl.addToShelf);
router.get('/', checkToken, shelfCtrl.getbyUserID);
router.delete('/', shelfCtrl.deleteShelfs);

module.exports = router;
