import {IbgeServiceImpl, ProductServiceImpl} from './infrastructure'
import {IbgeService, ProductService} from './ports'
import {Abstract, DI, Fetch, Http} from '../core'

DI.register(
  {
    for: 'base',
    use: '/tsxssr'
  },
  {
    for: Http,
    use: Fetch,
  },
  {
    for: IbgeService,
    use: IbgeServiceImpl,
    add: [Http],
  },
  {
    for: ProductService,
    use: ProductServiceImpl,
    add: [Http],
  }
)

export function useInject<T>(key: Abstract<T>) {
  return DI.inject<T>(key)
}
