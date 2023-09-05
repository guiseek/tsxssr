export interface ResponseTypeMap<T = void> {
  arrayBuffer: ArrayBuffer
  text: string
  blob: Blob
  json: T
}

export interface RequestConfig<T extends {[K: string]: unknown} | void = void>
  extends Omit<RequestInit, 'method'> {
  responseType: keyof ResponseTypeMap
  data?: T
}

export type FetchResponse<
  T,
  C extends RequestConfig
> = ResponseTypeMap<T>[C extends keyof ResponseTypeMap
  ? C['responseType']
  : 'json']

export abstract class Http {
  abstract get<R, C extends RequestConfig = RequestConfig>(
    input: RequestInfo | URL,
    requestConfig?: Partial<C>
  ): Promise<FetchResponse<R, C>>

  abstract post<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>>

  abstract put<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>>

  abstract patch<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>>

  abstract delete<R, C extends RequestConfig>(
    input: RequestInfo | URL,
    {responseType, data, ...init}: C
  ): Promise<FetchResponse<R, C>>
}
