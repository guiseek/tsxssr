type SetState<T> = (value: T) => T
type GetState<T> = () => T

export function useState<T>(initialState: T) {
  let currentState = initialState

  const setState = (value: T) => (currentState = value)

  const getState = () => currentState

  return [setState, getState] as [SetState<T>, GetState<T>]
}
