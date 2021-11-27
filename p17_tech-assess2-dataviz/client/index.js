import 'index.html'
import 'style.css'
import 'favicon.ico'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { csv } from 'd3-request'
import io from 'socket.io-client'

// Load historical data
csv('/market-history', (error, data) => console.log('History', error || data))

// Subscribe to updates
const socket = io()
socket.on('market events', function (data) { console.log('Change', data) })
socket.on('start new day', function (data) { console.log('NewDay', data) })



// Optional: to render with React
class MyComponent extends Component {
  render() {
    const { text } = this.props
    return <div>{text}</div>
  }
}
ReactDOM.render(
  <MyComponent text='This is a placeholder React Component. Also, have a look in the dev console to see the data we loaded.' />,
  document.body.appendChild(document.createElement('div'))
)
