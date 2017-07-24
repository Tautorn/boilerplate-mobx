import get from 'lodash/get'

export function onResponseError(error) {
  const unauthorizedStatus = 401
  const isUnauthorized = get(error, 'response.status') === unauthorizedStatus

  if (isUnauthorized) {
    window.location.replace('/auth/login.html')
  }

  return Promise.reject(error)
}

export function validateRequest(config) {
  // service validations

  return config
}
