const initState = {
  name: '',
  phone: '',
}

export const formInfo = (state = initState, action) => {
  switch (action.type) {
    case 'FORM_SET':
      state.name = action.name
      state.phone = action.phone
      break
    case 'FORM_CLEAN':
      state.name = ''
      state.phone = ''
      break
    default:
      return state
  }
  return state
}
