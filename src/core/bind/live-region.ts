export function LiveRegion<T>(fn: (props: T) => JSX.Element) {
  const fragment = document.createElement('section')
  fragment.role = 'region'
  fragment.ariaLive = 'polite'
  const render = (props: T) => {
    fragment.replaceChildren(TSX.factory(fn, props))
  }
  return Object.assign(fragment, {render})
}
