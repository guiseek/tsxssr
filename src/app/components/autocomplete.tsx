interface AutocompleteProps<T extends string> {
  id: string
  options: {value: T; text: string}[]
}

export function Autocomplete<T extends string>(props: AutocompleteProps<T>) {
  return (
    <datalist id={props.id}>
      {props.options.map((item) => (
        <option value={item.text}>{item.value}</option>
      ))}
    </datalist>
  )
}
