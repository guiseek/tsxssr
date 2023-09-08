import {DI} from './di'

export function use<T extends object>() {
  return <K extends keyof T & string>(key: K) => DI.inject<T[K]>(key)
}
