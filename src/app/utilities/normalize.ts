export function normalize<T extends string>(value: T) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
