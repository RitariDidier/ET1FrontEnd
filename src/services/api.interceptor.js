function request (config) {
    // eslint-disable-next-line dot-notation
    config.headers['Authorization'] = localStorage.getItem('token') || ''
    return config
  }

  function responseError (error) {
    // eslint-disable-next-line prefer-const
    let status = error.response.status
    if (status === 401) logout()
    return Promise.reject(error)
  }

  function logout () {
    localStorage.clear()
    if (window.location.pathname !== '/login') {
      location.reload()
    }
  }

  export { request, responseError }
