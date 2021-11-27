const { utcDay, utcMinute } = require('d3-time')
const { utcParse } = require('d3-time-format')

const randomize = (stock, i) => Object.assign(stock, {
  waveFreq:   .5 + 1.5  * Math.random(),
  waveShift: (.5 + 1.5) * Math.random()// + (i / stocks.length)
})

const stocks = [
  { ticker: 'AAPL',  startPrice: 119.2500 },
  { ticker: 'GOOGL', startPrice: 829.5300 },
  { ticker: 'FB',    startPrice: 122.6200 },
  { ticker: 'MSFT',  startPrice:  62.6100 }
]
stocks.forEach(randomize)

const parseTime = utcParse('%H:%M')
const DAY_START = 9.5
const DAY_END   = 16
const CHANGE_ODDS = .7

const samplesPerDay = (DAY_END - DAY_START) * 60

class Market {
  constructor (startAt = 0) {
    const timestamp = this.timestamp = utcMinute.offset(utcDay.floor(Date.now()), DAY_START * 60).valueOf() // market opens at 9:30am
    this.history = stocks.map( ({ticker, startPrice}) => ({ ticker, timestamp, price: startPrice }) )

    if (startAt) {
      if (typeof startAt === 'string') {
        startAt = utcMinute.count(parseTime('9:30'), parseTime(startAt))
        startAt = Math.max(0, Math.min(startAt, DAY_END * 60))
      }
      while(startAt-- > 0) {
        this.generateMarketEvents()
      }
    }
  }

  startNewDay () {
    const timestamp = this.timestamp = utcMinute.offset(utcDay.ceil(this.timestamp), DAY_START * 60).valueOf() // market re-opens at 9:30am the next day
    stocks.forEach(randomize)
    this.history = stocks.map( ({ticker}) => ({ ticker, timestamp, price: this.getLastPrice(ticker) }) )
    return { newDay: true, timestamp }
  }

  generateMarketEvents () {
    if(new Date(this.timestamp).getUTCHours() === DAY_END) { // market closes at 16:00
      return this.startNewDay()
    }

    const timestamp = this.timestamp = utcMinute.offset(this.timestamp, 1).valueOf()
    const changes = stocks.map(({ticker, waveFreq, waveShift}) => {
      if (Math.random() > CHANGE_ODDS ) return { ticker, change: 0 }
      else {
        const f = ((this.history.length / stocks.length) % samplesPerDay) / samplesPerDay // fraction of trading day
        const w = Math.sin(2 * Math.PI * (f + waveShift ) / waveFreq) // intraday wave freq
        const dir = Math.random() > .8 ? -1 : 1
        const lastPrice = this.getLastPrice(ticker)
        const amount = parseInt(Math.max(-lastPrice * .8,
            dir * (2 * (Math.random() - .5) + w * Math.random()) * (lastPrice * .001) / waveFreq / (CHANGE_ODDS / .8)
          ) * 10000) / 10000
        return { ticker, change: amount }
      }
    })
    this.history.push.apply(
      this.history,
      changes.map(({ticker, change}) => ({
        ticker, timestamp,
        price: this.getLastPrice(ticker) + change
      }))
    )

    return { timestamp, changes: changes.filter(({change}) => change !== 0) }
  }

  getLastPrice (ticker) {
    for (let i = this.history.length - 1; i >= 0; i--) {
      if (this.history[i].ticker === ticker) return this.history[i].price
    }
  }
}

module.exports = Market
