const initState = {
  name: '',
  phone: '',
}

export const formInfo = (state = initState, action) => {
  switch (action.type) {
    case 'FORM_SET':
      return {
        name: action.name,
        phone: action.phone
      }
    case 'FORM_CLEAN':
      return {
        name: '',
        phone: ''
      }
    default:
      return state
  }
}
