export class Link {
  constructor(
    readonly text: string,
    readonly href: string,
    readonly props: Partial<HTMLAnchorElement> = {}
  ) {}
}
