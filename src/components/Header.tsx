import { Link } from 'react-router-dom'
import './Header.styles.css'

interface HeaderResponsiveProps {
  links: { link: string; label: string }[]
}

export const HeaderMenu: React.FC<HeaderResponsiveProps> = ({ links }) => {
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
        <form
          style={{ display: 'inline' }}
          action='https://github.com/login/oauth/authorize'
          method='get'
        >
          <button>Login via Github</button>
        </form>
      </nav>
    </header>
  )
}
https:///ZEA-repository.github.io/repo-info/pages