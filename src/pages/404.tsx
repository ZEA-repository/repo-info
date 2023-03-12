import { Illustration } from '@/components/404/Illustration'
import { Link } from 'react-router-dom'
import './404.styles.css'

export function NothingFoundBackground() {
  return (
    <section className='center nothing_found'>
      <Illustration className='nothing_found_img' />
      <div className='nothing_found_description'>
        <h1>Nothing to see here</h1>
        <p>
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
        </p>
        <div>
          <Link to='/'>Back to home page</Link>
        </div>
      </div>
    </section>
  )
}
