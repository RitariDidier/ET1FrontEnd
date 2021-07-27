import Api from './ApiService'

class ModService extends Api {
  viajes (viaje) {
    // eslint-disable-next-line quotes
    return this.resource.post(`createViajes`, viaje)
  }
}

export default new ModService('mod')
