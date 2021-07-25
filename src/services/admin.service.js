import Api from './ApiService'

class AdminService extends Api {
  viajes (viaje) {
    // eslint-disable-next-line quotes
    return this.resource.post(`createViajes`, viaje)
  }
}

export default new AdminService('admin')
