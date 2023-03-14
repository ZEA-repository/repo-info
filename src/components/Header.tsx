import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/hooks/useStore'
import { useEffect } from 'react'
import './Header.styles.css'

interface HeaderResponsiveProps {
  links: { link: string; label: string }[]
}

export const HeaderMenu: React.FC<HeaderResponsiveProps> = observer(
  ({ links }) => {
    const {
      rootStore: { AuthStore },
    } = useStore()
    useEffect(() => {
      const token = localStorage.getItem('accessToken')
      if (token) AuthStore.setToken(token)
    }, [])
    return (
      <header className='header'>
        <nav className='nav_links'>
          <Link to='/' className='link'>
            <span className='logo'>🤘 RepoInfo</span>
          </Link>
          {links.map((link) => (
            <Link key={link.label} to={link.link} className='link'>
              {link.label}
            </Link>
          ))}
          {!AuthStore.token ? (
            <button onClick={() => AuthStore.fetchToken()}>
              Login via Github
            </button>
          ) : (
            <button onClick={() => AuthStore.clearToken()}>Logout</button>
          )}
        </nav>
      </header>
    )
  }
)
