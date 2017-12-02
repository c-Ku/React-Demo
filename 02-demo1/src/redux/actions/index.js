let newNumber = 0

export const actions = {
  dataFetch: (res) => ({
    type: 'DATA_FETCH',
    id: newNumber++,
    text: `A new item ${newNumber}: ${res}.`
  }),

  dataClear: () => {
    newNumber = 0
    return {
      type: 'DATA_CLEAR'
    }
  },

  formSet: (arr) => ({
    type: 'FORM_SET',
    name: arr.name,
    phone: arr.phone
  })
}
