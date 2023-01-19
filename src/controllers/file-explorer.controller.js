import { username } from '../data/info.js'

export function fileExplorerController(req, res, next) {
  res.render('file-explorer', { username, isFile: true })
  next()
}