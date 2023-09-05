import {Http} from '../core/http'

interface ItemsProps {
  http: Http | boolean
}

export interface Products {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export function Products(props: ItemsProps) {
  if (typeof props.http !== 'boolean')
    props.http
      .get<Products>(`https://dummyjson.com/products`)
      .then((products) => {
        console.table(products.products)
      })

  return <h2>Produtos</h2>
}
