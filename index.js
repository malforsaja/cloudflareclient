const express = require('express')
const http = require('http')
const dotenv = require('dotenv').config()
var app = express()

var ips = require('./routes/ip_routes')
var CloudflareIP = require('./ips/class')

app.use('/', ips)

var test = new CloudflareIP()
console.log(test.getIPCloudflare())

/* var cf = require('cloudflare')({
    email: 'malfor.saja@gmail.com',
    key: 'b66001ad605220c35a347572d568da9e9c2d4'
});
 */


/*cf.zones.read('b66001ad605220c35a347572d568da9e9c2d4').then(function (resp) {
    return resp.result.status;
});*/

/* app.get('/ips', (req, res) => {
    //console.log(cf.ips.browse())
    cf.ips.browse().then( (response) => {
        res.status(200).json(response)
    })
}) */


const port = 3000
const server = http.createServer(app)

server.listen(port, () => console.log(`Running on localhost:${port}`))
