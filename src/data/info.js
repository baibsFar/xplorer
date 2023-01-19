import { type, homedir, networkInterfaces, userInfo } from 'node:os'

export const OS = type()
export const HOME_DIR = homedir()
export const ifaces = networkInterfaces()
export const username = userInfo().username