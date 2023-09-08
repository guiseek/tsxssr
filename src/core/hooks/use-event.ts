interface EventCallback<T> {
  (value: T): void
}

type OnEvent<T> = (fn: EventCallback<T>) => void
type EmitEvent<T> = (value: T) => void

const container = new Map()

export const useEvent = <
  T extends Record<string, any>,
  K extends keyof T & string = keyof T & string
>(
  event: K
): [OnEvent<T[K]>, EmitEvent<T[K]>] => {
  const getEvents = () => {
    return container.get(event) ?? []
  }

  const onEvent = (callback: EventCallback<T[K]>) => {
    container.set(event, [...getEvents(), callback])
  }

  const emitEvent = (value: T[K]) => {
    for (const fn of getEvents()) fn(value)
  }

  return [onEvent, emitEvent]
}
