import {Route} from './route'
import {Link} from './link'

export function routeToLink({path, title}: Route) {
  return new Link(title, [...path].join(''))
}
