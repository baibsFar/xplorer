import { app } from '../modules/app.module.js'
<<<<<<< HEAD
<<<<<<< HEAD
import { lstat } from 'fs/promises'
import { homedir } from 'os'
import { downloadFile, arrangeDirData } from '../service/app.service.js'
import { username as host } from '../data/info.js'
=======
import { stat } from 'fs/promises'
=======
import { lstat } from 'fs/promises'
>>>>>>> 79a04ef (feat: setting view path ; fix: symbolic link)
import { homedir } from 'os'
import { downloadFile, arrangeDirData } from '../service/app.service.js'
>>>>>>> 9875abf (feat: back functionnalities)

function AppController() {
    app.use(async (req, res, next) => {
        try {
            const path = homedir() + decodeURI(req.path)
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            const stats = await stat(path)
            if (stats.isFile()) downloadFile(res, path, size)
=======
            const stats = await lstat(path)
            if (stats.isFile()) downloadFile(res, path, stats.size)
            else if (stats.isSymbolicLink()) res.json({ message: 'Link or Symbolic Link' })
>>>>>>> 79a04ef (feat: setting view path ; fix: symbolic link)
            else res.json(await arrangeDirData(path))
        } catch (e) {
            console.error(e)
>>>>>>> 9875abf (feat: back functionnalities)
        }
        next()
    })
}

export { AppController }
