var express = require('express');
var router = express.Router();
var course = require('../ips/ip');

router.get('/getcloudflareips', course.getCloudflareIPs);
router.get('/getonefirewallips', course.addOnefirewallIPs);
router.get('/getof', course.getIP_onefirewall);

module.exports = router;