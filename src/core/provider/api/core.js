import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import { validateRequest, onResponseError } from '../interceptors'

const getBasicConfig = () => {
  return {
    baseURL: global.URL_CONFIG.baseUrl,
    params: {

    },
    headers: {

    }
  }
}

const config = getBasicConfig()
const api = axios.create(config)

api.interceptors.request.use(validateRequest)
api.interceptors.response.use(null, onResponseError)

api.request = (path, options) => {
  const mergedOptions = defaultsDeep(options, getBasicConfig())
  return api(path, mergedOptions).then(resp => resp.data)
}

export default api
