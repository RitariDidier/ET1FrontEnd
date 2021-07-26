import Api from './ApiService'

class PasajeService extends Api {
  createPasaje (origen, destino, fecha, hora, asiento, _id) {
      const body = {
        origen: origen,
        destino: destino,
        fecha: fecha,
        hora: hora,
        asiento: asiento,
      }
    // eslint-disable-next-line quotes
    return this.resource.post(`createPasaje/` + _id, body)
  }

  getPasajesByUser (_id) {
    // eslint-disable-next-line quotes
    return this.resource.get(`getUserPasajes/` + _id)
  }
}

export default new PasajeService('pasaje')
