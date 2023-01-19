import { networkInterfaces } from 'os'

function getIpv4() {
    const interfaces = networkInterfaces()

    for (const iface of Object.keys(interfaces)) {
        if (iface === 'lo') continue
        else return interfaces[iface][0].address
    }

    return '127.0.0.1'
}

export { getIpv4 }