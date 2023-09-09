import {useContent} from '../../core'
import {intercept} from '../utilities'

export function Home() {
  const name = useContent('')

  const onInput = (input: HTMLInputElement) => {
    name.update(input.value)
  }

  return (
    <>
      <h2>Home</h2>

      <h3>Seu nome é: {name}</h3>

      <input
        name="yourname"
        placeholder="Qual seu nome?"
        on:input={intercept('target')(onInput)}
      />
    </>
  )
}
