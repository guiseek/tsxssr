const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
const date = new Intl.DateTimeFormat('pt-BR')

export {currency, date}
