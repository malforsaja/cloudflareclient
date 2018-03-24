var dotenv = require('dotenv')
var cf = require('cloudflare')({
    email: process.env.EMAIL,
    key: process.env.KEY
});

class CloudflareIP {
    constructor() { }

    getIPCloudflare(req, res) {        
        cf.ips.browse().then((response) => {
            res.status(200).json(response.result.ipv4_cidrs)
        })
    }
}

module.exports = CloudflareIP;