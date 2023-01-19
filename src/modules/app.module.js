import express from 'express'
import { logActivities } from '../middlewares/app.middleware.js'

const app = express()

app.get('/favicon.ico', (_req, res) => res.end())
app.use(logActivities())

export { app }