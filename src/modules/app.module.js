import express from 'express'
import path from 'path'
import { logActivities } from '../middlewares/app.middleware.js'

const app = express()

app.get('/favicon.ico', (_req, res) => res.end())
app.set('view engine', 'ejs')
app.set(path.join(path.resolve('../'), 'views'))
app.use(logActivities())
app.use(express.static('views'))

export { app }