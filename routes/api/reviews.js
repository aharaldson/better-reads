const express = require('express');
const router = express.Router();
const revCtrl = require('../../controllers/api/reviews');

router.post('/', revCtrl.addReview);

module.exports = router;
