import {currency, filterFor, intercept} from '../utilities'
import {LiveRegion, useState} from '../../core'
import {Product, Products} from '../interfaces'
import {ProductService} from '../ports'
import {useInject} from '../uses'

interface TableProps {
  products: Product[]
}

function Table({products}: TableProps) {
  return (
    <table>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{currency.format(product.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const initialState = {
  limit: 10,
  skip: 0,
  total: 0,
  products: [],
}

export function Products() {
  const product = useInject(ProductService)
  const [setProducts, getProducts] = useState<Products>(initialState)

  const table = LiveRegion<TableProps>(Table)

  product.getProducts().then(setProducts).then(table.render)

  const onSearch = (input: HTMLInputElement) => {
    const products = getProducts().products.filter(filterFor(input.value))
    table.render({...initialState, products})
  }

  return (
    <>
      <h2>Produtos</h2>
      <input
        type="search"
        placeholder="Busque por um item"
        on:input={intercept('target')(onSearch)}
      />
      {table}
    </>
  )
}
