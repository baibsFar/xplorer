import { homedir } from 'os'

/**
 * Log client activities in the console
 */
function logActivities() {
    return (req, _res, next) => {
        if (req.hostname !== '127.0.0.1') {
            const date = new Date()
            console.log(
                `[${req.ip === req.hostname ? 'YOU' : 'CLIENT'} : ${req.ip}] ` +
                `[${date.toDateString() + ' ' + date.toLocaleTimeString()}] -- ` +
                `${req.method} [${homedir() + decodeURI(req.path)}]`
            )
        }
        next()
    }
}

export { logActivities }