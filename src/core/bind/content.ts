/* eslint-disable @typescript-eslint/no-non-null-assertion */
export type Value = string | number | boolean | Date

export type GetValue<T extends Value> = T extends number
  ? number
  : T extends string
  ? string
  : T extends true | false
  ? boolean
  : T extends Date
  ? Date
  : unknown

export type OnlyContent<T extends Value> = Pick<Content<T>, 'value' | 'update'>

export class Content<T extends Value> extends Text {
  constructor(value: T) {
    super(value.toLocaleString())
  }

  get value(): GetValue<T> {
    return (
      !isNaN(+this.nodeValue!) ? +this.nodeValue! : this.nodeValue
    ) as GetValue<T>
  }

  update(value: GetValue<T> | OnlyContent<T>) {
    this.nodeValue = value.toLocaleString()
  }
}
