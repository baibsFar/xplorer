import { app } from '../modules/app.module.js'
import { homedir } from 'os'
import { downloadFile, arrangeDirData } from '../service/app.service.js'
import { username as host } from '../data/info.js'
import { lstat } from 'fs/promises'

function AppController() {
    app.use(async (req, res) => {
        try {
            const path = homedir() + decodeURI(req.path)
            const stats = await lstat(path)
            if (stats.isFile()) downloadFile(res, path, stats.size)
            else if (stats.isSymbolicLink()) res.json({ message: 'Link or Symbolic Link' })
            else {
                const { directories, files } = await arrangeDirData(path)
                res.render('file-explorer', { directories, files, host })
            }
        } catch (e) {
            console.error(e)
            res.json({ message: e })
        }
    })
}

export { AppController }
