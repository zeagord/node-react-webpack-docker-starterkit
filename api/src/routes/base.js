const express = require('express');
const router = express.Router();

router.get('/ping', function (req, res) {
	res.send('Ping! Ping! Ping! Get Started! Date: ' + new Date());
   });

module.exports = router;
