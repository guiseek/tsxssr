import {createElement} from '../utilities'

export function LiveRegion<T>(fn: (props: T) => JSX.Element) {
  const container = createElement('div')
  container.role = 'region'
  container.ariaLive = 'polite'
  const render = (props: T) => {
    container.replaceChildren(TSX.factory(fn, props))
  }
  return Object.assign(container, {render})
}
