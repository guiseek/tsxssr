interface HeadersProps {
  title: string
}

export function Header(props: HeadersProps) {
  return (
    <header>
      <a href="/">
        <h1>{props.title}</h1>
      </a>
    </header>
  )
}
