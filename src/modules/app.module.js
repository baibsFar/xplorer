import express from 'express'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 79a04ef (feat: setting view path ; fix: symbolic link)
import path from 'path'
import { logActivities } from '../middlewares/app.middleware.js'
import { HOME_DIR } from '../data/info.js'
=======
import { logActivities } from '../middlewares/app.middleware.js'
>>>>>>> 9875abf (feat: back functionnalities)

const app = express()

app.get('/favicon.ico', (_req, res) => res.end())
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 79a04ef (feat: setting view path ; fix: symbolic link)
app.set('view engine', 'ejs')
app.set(path.join(path.resolve('../'), 'views'))
app.use(logActivities())
app.use(express.static('views'))
<<<<<<< HEAD
app.use(express.static('public'))
app.use(express.static(HOME_DIR, { dotfiles: 'allow' }))
=======
app.use(logActivities())
>>>>>>> 9875abf (feat: back functionnalities)
=======
>>>>>>> 79a04ef (feat: setting view path ; fix: symbolic link)

export { app }