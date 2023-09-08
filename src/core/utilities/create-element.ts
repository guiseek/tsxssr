import {Props} from '../types'

export const createElement = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: Props = {},
  ...children: Node[]
): HTMLElementTagNameMap[K] => {
  const element = Object.assign(document.createElement(tag), props)
  element.append(...children)
  return element
}
