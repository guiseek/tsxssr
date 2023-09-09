interface LoaderProps {
  active: boolean
}

export function Loader(props: LoaderProps) {
  return props.active ? <div className="loader"></div> : <></>
}
