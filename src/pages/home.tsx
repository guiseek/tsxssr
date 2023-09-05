import {useContent} from '../core/hooks/use-content'

export function Home() {
  const search = useContent('')

  function onSearch<T>(target: T) {
    search.update((target as HTMLInputElement).value)
  }

  return (
    <>
      <h2>Home</h2>

      <form>
        <label>Termo de pesquisa</label>
        <input
          type="search"
          name="term"
          id="term"
          on:input={(ev) => onSearch(ev.target)}
        />
      </form>

      <h3>{search}</h3>
    </>
  )
}
