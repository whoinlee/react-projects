const port = process.env.PORT || 3000
const eventTimeout = process.env.EVENTS_TIMEOUT || 2000
const simulateLateResponse = !!process.env.LATE_RESPONSE || false
const startAt = process.env.START_AT || 0

const express = require('express')
const app = express()
const publicPath = require('path').resolve(__dirname, '..', 'public')
app.use(express.static(publicPath))
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const { csvFormat } = require('d3-dsv')

const Market = require('./market')
let market = new Market(startAt)

app.get('/market-history', (req, res) => {
  setTimeout(function() {
    const data = csvFormat(market.history, ['timestamp', 'ticker', 'price'])
    setTimeout(function() {
      res
        .set('Content-Type', 'text/csv')
        .status(200)
        .send(data)
    }, simulateLateResponse * eventTimeout)
  }, simulateLateResponse * eventTimeout)
})

server.listen(port, function () {
  console.log('Server listening at port %d', port)
})

io.on('connection', (socket) => {
  console.log('Connected')
})

setInterval(() => {
  const events = market.generateMarketEvents()
  if (events.newDay) { io.emit('start new day', events) }
  else               { io.emit('market events', events) }
}, eventTimeout)
