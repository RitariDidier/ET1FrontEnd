import Api from './ApiService'

class BusService extends Api {
  updateAsiento (asiento) {
    // eslint-disable-next-line quotes
    return this.resource.put(`updateAsiento/` + asiento._id, asiento)
  }
}

export default new BusService('bus')
