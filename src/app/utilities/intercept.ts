export const intercept =
  <E extends Event = Event, K extends keyof E = keyof E>(prop: K) =>
  <R>(fn: (value: R) => void) =>
  (event: E) => {
    fn(event[prop] as R)
  }
