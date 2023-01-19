import { indexController } from './controllers/index.controller.js'
import { fileExplorerController } from './controllers/file-explorer.controller.js'
import { app } from './main.js'

export const router = () => {
  app.get('/', indexController)
  app.get('/file-explorer', fileExplorerController)
}