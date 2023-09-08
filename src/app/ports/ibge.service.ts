import {Estado} from '../interfaces'

export abstract class IbgeService {
  abstract getStates(): Promise<Estado[]>
}
