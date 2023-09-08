import {Autocomplete} from '../components'
import {LiveRegion} from '../../core'
import {IbgeService} from '../ports'
import {Estado} from '../interfaces'
import {useInject} from '../uses'

const mapEstadosToAutocomplete = (response: Estado[]) =>
  response.map((state) => ({
    text: state.nome,
    value: `${state.id}`,
  }))

export function States() {
  const ibge = useInject(IbgeService)
  const list = 'stateList' as unknown as HTMLDataListElement
  const autocomplete = LiveRegion(Autocomplete<string>)
  autocomplete.render({id: 'stateList', options: []})

  ibge
    .getStates()
    .then(mapEstadosToAutocomplete)
    .then((options) => autocomplete.render({options, id: 'stateList'}))

  return (
    <form>
      <label>Estado</label>
      <input type="search" list={list} name="state" />
      {autocomplete}
    </form>
  )
}
