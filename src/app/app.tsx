import {Home, Products, Items} from './pages'
import {Shell} from './layout/shell'
import {Route} from './utilities'
import {DI, Fetch} from '../core'

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
