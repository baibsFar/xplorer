import express from 'express'
<<<<<<< HEAD
import path from 'path'
import { logActivities } from '../middlewares/app.middleware.js'
import { HOME_DIR } from '../data/info.js'
=======
import { logActivities } from '../middlewares/app.middleware.js'
>>>>>>> 9875abf (feat: back functionnalities)

const app = express()

app.get('/favicon.ico', (_req, res) => res.end())
<<<<<<< HEAD
app.set('view engine', 'ejs')
app.set(path.join(path.resolve('../'), 'views'))
app.use(logActivities())
app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.static(HOME_DIR, { dotfiles: 'allow' }))
=======
app.use(logActivities())
>>>>>>> 9875abf (feat: back functionnalities)

export { app }