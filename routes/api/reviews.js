const express = require('express');
const router = express.Router();
const revCtrl = require('../../controllers/api/reviews');

router.post('/books/:bookId/shelves/:shelfId', revCtrl.addReview);

module.exports = router;
