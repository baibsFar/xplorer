import { app } from '../modules/app.module.js'
import { stat } from 'fs/promises'
import { homedir } from 'os'
import { downloadFile, arrangeDirData } from '../service/app.service.js'

function AppController() {
    app.use(async (req, res) => {
        try {
            const path = homedir() + decodeURI(req.path)
            const stats = await stat(path)
            if (stats.isFile()) downloadFile(res, path, size)
            else res.json(await arrangeDirData(path))
        } catch (e) {
            console.error(e)
        }
    })
}

export { AppController }
