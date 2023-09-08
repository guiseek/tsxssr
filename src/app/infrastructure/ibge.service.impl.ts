import {IbgeService} from '../ports'
import {Estado} from '../interfaces'
import {Http} from '../../core'

export class IbgeServiceImpl implements IbgeService {
  constructor(private readonly http: Http) {}

  getStates() {
    return this.http.get<Estado[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    )
  }
}
