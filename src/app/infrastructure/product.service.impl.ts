import {ProductService} from '../ports'
import {Products} from '../interfaces'
import {Http} from '../../core'

export class ProductServiceImpl implements ProductService {
  constructor(private readonly http: Http) {}

  getProducts() {
    return this.http.get<Products>('https://dummyjson.com/products')
  }
}
