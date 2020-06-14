import HttpRequest from '@/libs/axios'
import config from '@/config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod
const params = {
  $format: 'JSON'
}

const axios = new HttpRequest({
  baseUrl,
  params
})

export default axios
