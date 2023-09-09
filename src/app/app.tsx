import {Blog, States, Home, Products} from './pages'
import {Shell} from './layout/shell'
import {Route} from './utilities'
import {DI} from '../core'

export function App() {
  const base = DI.inject('base')
  const routes: Route[] = [
    {
      path: `${base}/`,
      title: 'Página inicial',
      page: () => {
        return <Home />
      },
    },
    {
      path: `${base}/states`,
      title: 'States',
      page: () => <States />,
    },
    {
      path: `${base}/blog`,
      title: 'Blog',
      page: () => <Blog http />,
    },
    {
      path: `${base}/produtos`,
      title: 'Produtos',
      page: () => <Products />,
    },
  ]

  return <Shell routes={routes} />
}
