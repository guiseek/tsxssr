import type {OnlyContent, Value} from '../bind/content'
import {Content} from '../bind/content'

export function useContent<T extends Value>(value: T) {
  return new Content<T>(value) as OnlyContent<T>
}
