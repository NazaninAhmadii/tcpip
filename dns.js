const express = require('express')
const dns = require('dns')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

// POST requet to resolve ip lookup
app.post('/', (req, res) => {
    console.log(req.body.site)
    const hostname = req.body.site
    console.log(`Recieved Data: ${hostname}`)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')

    // Resolve the DNS for the specified hostname
    dns.resolve4(hostname, (err, addresses) => {
        if (err) {
        console.error(err)
        res.send('Error resolving DNS')
        } else {
        const ipAddress = addresses[0]
        console.log(ipAddress)
        res.send(`Resolved IP: ${ipAddress}`)
        }
    })
})

app.get('/', (req, res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.send('Connected to DNS server!')
})

app.listen(3001, () => {
    console.log(`DNS is running on http://localhost:3001`)
})
