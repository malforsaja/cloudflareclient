var dotenv = require('dotenv')

var cf = require('cloudflare')({
    email: process.env.EMAIL,
    key: process.env.KEY
});


// Get IPs from cloudflare and add to onefirewall
var getCloudflareIPs = (req, res) => {
    cf.ips.browse().then( (response) => {
        res.status(200).json(response.result.ipv4_cidrs)
    })
}

// Add IPs from onefirewall to cloudflare, PUT method

var addOnefirewallIPs = (req, res) => {
    cf.ips.browse().then( (response) => {
        res.status(200).json(response.result.ipv4_cidrs + "," + ipone.ipv4_cidrs)
    })
}

module.exports = {
    getCloudflareIPs,
    addOnefirewallIPs
}