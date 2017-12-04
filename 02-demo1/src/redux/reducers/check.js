initState = window.localStorage.check

export const check = (state = initState, action) => {
  switch (action.type) {
    case 'CHECK_SET':
      window.localStorage.setItem('check', true)
      state = 'true'
      break
    case 'CHECK_CLEAN':
      window.localStorage.setItem('check', false)
      state = 'false'
      break
    default:
      return state
  }
  return state
}
