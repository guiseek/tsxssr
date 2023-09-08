import {LiveRegion} from '../../core'

interface LiveProps {
  title: string
}

export function Blog() {
  const fragment = LiveRegion<LiveProps>((props) => <h1>{props.title}</h1>)
  console.log(fragment)

  setTimeout(() => fragment.render({title: 'Título'}), 1000)

  return <>{fragment}</>
}
