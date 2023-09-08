import {Abstract, DI} from '../di/di'

export function useDI<T>(token: string | symbol | Abstract<T>) {
  return DI.inject<T>(token)
}
