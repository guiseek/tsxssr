import {LiveRegion} from '../../core'
import {Loader} from '../components'

interface LiveProps {
  title: string
}

export function Blog() {
  const titleFn = (props: LiveProps) => {
    return <h1>{props.title}</h1>
  }
  
  const title = LiveRegion<LiveProps>(titleFn)
  const loader = LiveRegion(Loader)

  loader.render({active: true})

  setTimeout(() => {
    loader.render({active: false})
    title.render({title: 'Título'})
  }, 2000)

  return (
    <>
      {loader}
      {title}
    </>
  )
}
