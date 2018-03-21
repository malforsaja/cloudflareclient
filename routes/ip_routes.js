var express = require('express');
var router = express.Router();
var course = require('../ips/ip');

router.get('/getcloudflareips', course.getCloudflareIPs);
router.put('/getonefirewallips', course.addOnefirewallIPs);

module.exports = router;