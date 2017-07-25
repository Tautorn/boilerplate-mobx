import get from 'lodash/get'

export function onResponseError(error) {
  const unauthorizedStatus = 401
  const isUnauthorized = get(error, 'response.status') === unauthorizedStatus

  // error handler

  return Promise.reject(error)
}

export function validateRequest(config) {
  // service validations

  return config
}
