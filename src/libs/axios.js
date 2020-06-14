import axios from 'axios'

class HttpRequest {
  constructor (baseConfig) {
    this.baseUrl = baseConfig.baseUrl
    this.params = baseConfig.params
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      params: this.params,
      headers: {
        //
      }
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.response.use(res => {
      const { data, status } = res
      return { data, status }
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
