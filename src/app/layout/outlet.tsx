import {Route} from '../utilities'

interface OutletProps {
  routes: Route[]
}

function findByPath(routes: Route[], path: string) {
  return routes.find((route) => route.path === path)
}

export function Outlet(props: OutletProps) {
  const main = document.createElement('main')
  main.role = 'contentinfo'

  function getRouteOrHome(path: string) {
    return findByPath(props.routes, path) ?? props.routes.shift()
  }

  function changeRoute(path: string) {
    const route = getRouteOrHome(path)
    console.log(route);
    

    if (route) {
      while (main.firstChild) {
        main.removeChild(main.firstChild)
      }

      if (typeof route.page === 'function') {
        main.appendChild(route.page() as Node)
      } else {
        main.appendChild(route.page as Node)
      }
      document.title = route.title
    }
  }

  navigation.onnavigate = (e) => {
    if (!e.canIntercept) return
    if (e.hashChange || !!e.downloadRequest) return
    e.intercept({
      async handler() {
        changeRoute(e.destination.url.replace(location.origin, ''))
      },
    })
  }

  changeRoute(location.pathname)

  return <>{main}</>
}
