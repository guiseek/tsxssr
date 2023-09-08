import {normalize} from './normalize'
import {toLower} from './to-lower'

export function filterFor<T extends object>(value: string) {
  return (item: T) => {
    return Object.values(item)
      .filter((prop) => typeof prop === 'string')
      .map(toLower)
      .map(normalize)
      .some((property) => {
        const normalized = toLower(normalize(value))
        return property.indexOf(normalized) > -1
      })
  }
}
