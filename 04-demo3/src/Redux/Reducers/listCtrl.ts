const initState = []

export const listCtrl = (state = initState, action) => {
  switch (action.type) {
    case 'DATA_FETCH':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ]
    case 'DATA_CLEAR':
      return []
    default:
      return state
  }
}
