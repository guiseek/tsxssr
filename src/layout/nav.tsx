import {Link} from '../utilities/link'

interface AsideProps {
  links: Link[]
}

export function Nav(props: AsideProps) {
  return (
    <nav>
      <ul>
        {props.links.map((link) => (
          <li>
            <a href={link.href} {...link.props}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
