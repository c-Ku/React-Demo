export const phone = value =>
      value && !/^(13[0-9]|15[0-9]|166|17[03-8]|18[0-9]|19[89])[0-9]{8}$/.test(value)
            && 'Invalid mobile form!'

export const mail = value =>
      value && !/^[\w\.]+@([\w\-]+\.)+[a-z]{2,5}$/.test(value)
            && 'Invalid mail form!'
