import {DI} from '../core/di/di'
import {Fetch} from '../core/http'
import {Shell} from '../layout/shell'
import {Products} from '../pages/products'
import {Home, Items} from '../pages'
import {Route} from '../utilities'

DI.register({
  for: 'http',
  use: Fetch,
})

export function App() {
  const routes: Route[] = [
    {
      path: '/',
      title: 'Página inicial',
      page: () => {
        return <Home />
      },
    },
    {
      path: '/itens',
      title: 'Itens',
      page: () => <Items />,
    },
    {
      path: '/produtos',
      title: 'Produtos',
      page: () => <Products http />,
    },
  ]

  return <Shell routes={routes} />
}
