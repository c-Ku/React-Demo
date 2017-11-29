let newNumber = 0
export const dataFetch = (res) => ({
  type: 'DATA_FETCH',
  id: newNumber++,
  text: `A new item ${newNumber}: ${res}.`
})

export const dataClear = () => {
  newNumber = 0
  return {
    type: 'DATA_CLEAR'
  }
}
