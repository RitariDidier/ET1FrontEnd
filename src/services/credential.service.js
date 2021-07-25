class CredentialService {
    getUser () {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }

    getViajeIda () {
        const viajeIda = localStorage.getItem('viajeIda')
        return viajeIda ? JSON.parse(viajeIda) : null
    }

    getViajeVuelta () {
        const viajeVuelta = localStorage.getItem('viajeVuelta')
        return viajeVuelta ? JSON.parse(viajeVuelta) : null
    }
}

export default new CredentialService()
