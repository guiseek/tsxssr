/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {DI} from '../di/di'

type Props = Record<string, PropertyKey>
type TagNameMap = HTMLElementTagNameMap | SVGElementTagNameMap
type TSXFactory<K extends keyof TagNameMap> = (props?: Props) => TagNameMap[K]

const createSVG = <K extends keyof SVGElementTagNameMap>(
  tag: K,
  props: Props
) => {
  const image = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (const [prop, value] of Object.entries(props ?? {})) {
    image.setAttribute(prop, value!.toLocaleString())
  }
  return image
}

const createHTML = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: Props = {}
) => {
  const element = document.createElement(tag)
  for (const key in props) {
    type Key = keyof typeof element

    const k = key === 'datalist' ? 'list' : (key as Key)

    if (k === 'list') {
      element.setAttribute(k, props[k].toString())
    } else {
      element[k] = props[k] as any
    }
  }
  return element as HTMLElementTagNameMap[K]
}

const createElement = <K extends keyof TagNameMap>(
  tag: K | 'svg',
  props: Props
) => {
  return tag === 'svg' ? createSVG(tag, props) : createHTML(tag, props)
}

export class TSX {
  static fragment() {
    return createHTML('template').content
  }
  static factory<K extends keyof TagNameMap>(
    tagOrFactory: K | TSXFactory<K>,
    properties: Props = {},
    ...nodes: Element[]
  ) {
    const props = Object.entries(properties ?? {}).reduce(
      (prev, [prop, value]) => {
        let normalizedProp = prop

        if (prop.startsWith('on:')) {
          console.log(prop)

          normalizedProp = prop.replace(':', '')
          console.log(normalizedProp)
        }

        const current = {[normalizedProp]: value}

        return {...prev, ...current}
      },
      properties
    )

    let node: SVGElement | (HTMLElement & Props) | TagNameMap[K]

    if (typeof tagOrFactory === 'string') {
      node = createElement(tagOrFactory, props)
    } else {
      for (const prop in props) {
        if (DI.has(prop)) {
          props[prop] = DI.inject(prop)
        }
      }
      node = tagOrFactory(props)
    }

    node.append(...nodes.flatMap(this.#children))

    return node as TagNameMap[K]
  }

  static #children = <T extends Element>(node: T) => {
    return typeof node === 'string' ? new Text(node) : node
  }
}

function addGlobal<T extends TSX>(factory: T) {
  ;(globalThis as typeof globalThis & {TSX: TSX}).TSX = factory
}

addGlobal(TSX)
