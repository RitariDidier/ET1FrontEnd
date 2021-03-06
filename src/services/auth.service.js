import Api from './ApiService'

class AuthService extends Api {
  login (credentials) {
    // eslint-disable-next-line quotes
    return this.resource.post(`auth/login`, credentials)
  }

  register (credentials) {
    // eslint-disable-next-line quotes
    return this.resource.post(`auth/register/`, credentials)
  }

  delete (credentials) {
    // eslint-disable-next-line quotes
    return this.resource.delete(`auth/delete/` + credentials)
  }

  updateProfile (id, user) {
    console.log(user.password)
    console.log(user)
    return this.resource.put('auth/update/' + id, user)
  }

  getUserByID (id) {
    return this.resource.get('auth/buscar/' + id)
  }

  getUsers () {
    return this.resource.get('users/')
  }
}

export default new AuthService('auth')
