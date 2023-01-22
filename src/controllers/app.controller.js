import { app } from '../modules/app.module.js'
import { lstat } from 'fs/promises'
import { homedir } from 'os'
import { downloadFile, arrangeDirData } from '../service/app.service.js'

function AppController() {
    app.use(async (req, res, next) => {
        try {
            const path = homedir() + decodeURI(req.path)
            const stats = await lstat(path)
            if (stats.isFile()) downloadFile(res, path, stats.size)
            else if (stats.isSymbolicLink()) res.json({ message: 'Link or Symbolic Link' })
            else res.json(await arrangeDirData(path))
        } catch (e) {
            console.error(e)
        }
        next()
    })
}

export { AppController }
