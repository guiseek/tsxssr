export type Fn<T = unknown, R = void> = (...params: T[]) => R
export type Abstract<T> = abstract new (...params: unknown[]) => T
export interface Type<T> extends Fn {
  new (...params: unknown[]): T
}

export interface Provider<T = unknown> {
  for: string | symbol | Abstract<T>
  add?: (string | symbol | Abstract<T>)[]
  use?: Type<T> | T
}

export class DI {
  static has<T>(type: Abstract<T> | string | symbol) {
    return this.#container.has(type)
  }

  static inject = <T>(type: Abstract<T> | string | symbol) => {
    try {
      return this.#container.get(type)
    } catch {
      throw `Provider ${type.toString()} não registrado`
    }
  }

  static register(...providers: Provider<unknown>[]) {
    providers.forEach(this.#set)
  }

  static #instantiate<T>({for: key, use}: Provider<T>) {
    const concrete = (use ?? key) as Type<T>
    const dependencies = this.#relations.get(key)

    if (typeof concrete === 'function') {
      try {
        return new concrete(...dependencies)
      } catch {
        return (concrete as Fn)(...dependencies)
      }
    }

    return concrete as T
  }

  static #set = <T>(provider: Provider<T>) => {
    this.#relations.set(provider.for, (provider.add ?? []).map(this.inject))
    this.#container.set(provider.for, this.#instantiate(provider))
  }

  static #relations = new Map()
  static #container = new Map()

  private constructor() {
    return
  }
}
