import express, { json } from 'express'
import { ifaces } from './data/info.js'
import { router } from './router.js'
import path from 'path'

export const app = express()
app.use(json())
app.set('view engine', 'ejs') //  Set the view engine to EJS
app.set('views', path.join(path.resolve(''), 'views'))  //  Set the absolute views path to /views
app.use(express.static('public'))

export function Main() {
  const Ipv4Address = ifaces.wlan0 ? ifaces.wlan0[0].address : '127.0.0.1'
  const Port = 5500

  router()
  app.listen(Port, () => console.log(`Server listen on ${Ipv4Address}:${Port}`))
}