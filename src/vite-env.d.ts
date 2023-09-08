/// <reference types="vite/client" />

type ToEvents<S extends string> = S extends `on${infer T}` ? `on:${T}` : ''

type FromEvents<S extends string> = S extends `on:${infer T}` ? `on${T}` : ''

type EventHandlers = {
  [K in ToEvents<keyof GlobalEventHandlers>]: GlobalEventHandlers[FromEvents<K>]
}

declare namespace JSX {
  interface Element {}

  type IntrinsicElements = {
    [K in keyof HTMLElementTagNameMap]: Partial<
      EventHandlers & HTMLElementTagNameMap[K]
    >
  }
}

declare const appRoot: HTMLElement

declare const TSX
