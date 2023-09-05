interface FooterProps {
  year: number
  company: string
}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <p>
        {props.year} &copy; {props.company}
      </p>
    </footer>
  )
}
