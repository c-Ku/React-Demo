function checkStatus (response) {
  if (response.status >= 200 && response.status < 501) {
    return response
  }
  const error: any = new Error(response.statusText)
  error.response = response
  throw error
}

function parseINFO (response, msgType) {
  return msgType === 'json' ? response.json() : response.text()
}

export default function request (url: string, options: any = {}, msgType: string = 'json') {
  options.headers = {
    ...options.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return fetch(url, options)
  .then(checkStatus)
  .then(res => parseINFO(res, msgType))
  .catch(error => {
    return {
      success: false,
      error_message: error.message
    }
  })
}
