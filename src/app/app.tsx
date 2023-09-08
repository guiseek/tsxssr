import {Blog, States, Home, Products} from './pages'
import {Shell} from './layout/shell'
import {Route} from './utilities'
import {} from './pages/states'

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
      path: '/states',
      title: 'States',
      page: () => <States />,
    },
    {
      path: '/blog',
      title: 'Blog',
      page: () => <Blog http />,
    },
    {
      path: '/produtos',
      title: 'Produtos',
      page: () => <Products />,
    },
  ]

  return <Shell routes={routes} />
}
