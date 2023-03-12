import { HeaderMenu } from '@/components/Header'
import { Outlet } from 'react-router-dom'
import './Main.styles.css'

export default function MainLayout() {
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Store example ', link: '/store-example' },
  ]

  return (
    <div>
      <HeaderMenu links={links} />
      <main className='app_main'>
        <Outlet />
      </main>
    </div>
  )
}
