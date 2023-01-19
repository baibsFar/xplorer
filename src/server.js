import { getIpv4 } from './service/ipv4.service.js'
import { app } from './modules/app.module.js'
import { AppController } from './controllers/app.controller.js'

function Server(port = 8080) {
    const host = getIpv4()

    AppController()

    app.listen(port, host, () => {
        console.log('\n----- Server running -----')
        console.log(`Client can now visit http://${host}:${port}\n`)
    })
}

export { Server }
