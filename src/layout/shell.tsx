import {Route, routeToLink} from '../utilities'
import {Footer} from './footer'
import {Header} from './header'
import {Outlet} from './outlet'
import {Nav} from './nav'

interface MainProps {
  routes: Route[]
}

export function Shell(props: MainProps) {
  const year = new Date().getFullYear()
  const links = props.routes.map(routeToLink)

  return (
    <>
      <Header title="Patterns" />
      <Nav links={links} />
      <Outlet routes={props.routes} />
      <Footer company="Lucas" year={year} />
    </>
  )
}
