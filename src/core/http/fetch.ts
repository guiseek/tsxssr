import {FetchResponse, Http, RequestConfig} from './http'

export class Fetch implements Http {
  async get<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, ...init} = {} as Partial<C>
  ): Promise<FetchResponse<R, C>> {
    return fetch(input, {...init, method: 'GET'}).then((res) => {
      return res[responseType ?? 'json']()
    })
  }

  async post<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>> {
    const body = JSON.stringify(data)

    const headers = this.#buildHeaders(init)

    const config = {...init, headers, body, method: 'POST'}

    return fetch(input, config).then((res) => {
      return res[responseType]()
    })
  }

  async put<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>> {
    const body = JSON.stringify(data)

    const headers = this.#buildHeaders(init)

    const config = {...init, headers, body, method: 'PUT'}

    return fetch(input, config).then((res) => {
      return res[responseType]()
    })
  }

  async patch<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>> {
    const body = JSON.stringify(data)

    const headers = this.#buildHeaders(init)

    const config = {...init, headers, body, method: 'PATCH'}

    return fetch(input, config).then((res) => {
      return res[responseType]()
    })
  }

  async delete<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>> {
    const body = JSON.stringify(data)

    const headers = this.#buildHeaders(init)

    const config = {...init, headers, body, method: 'DELETE'}

    return fetch(input, config).then((res) => {
      return res[responseType]()
    })
  }

  #buildHeaders(config: Partial<RequestConfig>) {
    const headers = new Headers()

    headers.append('Content-Type', 'application/json')
    for (const [key, val] of Object.entries(config.headers ?? {})) {
      headers.set(key, val)
    }
    return headers
  }
}
