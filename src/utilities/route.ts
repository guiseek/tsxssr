export class Route<T = void> {
  constructor(
    readonly path: string | string[],
    readonly page: any,
    readonly title: string,
    readonly data?: T
  ) {}
}
