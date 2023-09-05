/// <reference types="vite/client" />

type ToEvents<S extends string> = S extends `on${infer T}` ? `on:${T}` : ''

type FromEvents<S extends string> = S extends `on:${infer T}` ? `on${T}` : ''

type EventHandlers = {
  [K in ToEvents<keyof GlobalEventHandlers>]: GlobalEventHandlers[FromEvents<K>]
}

type ToDep<D extends string> = `di:${D}`

type Dependency = {
  'di:': boolean
}

declare namespace JSX {
  // interface Element extends Partial<EventHandlers & HTMLElement> {
  //   [attr: `di:${string}` | string]: unknown
  // }

  // interface Element extends Partial<EventHandlers & HTMLElement> {
  interface Element  {
    // (props: Record<`di:${string}` | string, any>): void
    // [attr: 'di']: any
  }

  interface IntrinsicElements {
    [elementName: string]: JSX.Element & Record<ToDep, boolean>
    // {
    //   props?: Record<string | `di:${string}`, any>
    //   Dependency
    // } & Record<`di:${string}`, boolean>
    // [elementName: string]: JSX.Element;
    [elementName: string]: JSX.Element & HTMLElement
    a: Partial<EventHandlers & HTMLAnchorElement>
    input: Partial<EventHandlers & HTMLInputElement>
    select: Partial<EventHandlers & HTMLSelectElement>
    option: Partial<EventHandlers & HTMLOptionElement>
    main: Partial<EventHandlers & HTMLElement>
  }
}

declare const appRoot: HTMLElement

declare const TSX
