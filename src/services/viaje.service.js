import Api from './ApiService'

class ViajeService extends Api {
  viajes (viaje) {
    // eslint-disable-next-line quotes
    return this.resource.post(`createViajes`, viaje)
  }

  findViaje (viaje) {
    // eslint-disable-next-line quotes
    return this.resource.get(`getViaje/` + viaje.origen + `&` + viaje.destino + `&` + viaje.fechaIda + `&` + viaje.horaIda)
  }

  findViajeVuelta (viaje) {
    // eslint-disable-next-line quotes
    return this.resource.get(`getViaje/` + viaje.destino + `&` + viaje.origen + `&` + viaje.fechaVuelta + `&` + viaje.horaVuelta)
  }
}

export default new ViajeService('viaje')
