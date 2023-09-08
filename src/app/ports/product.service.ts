import {Products} from '../interfaces'

export abstract class ProductService {
  abstract getProducts(): Promise<Products>
}
