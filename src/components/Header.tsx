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
        <a href='https://github.com/login/oauth/authorize?scope=public_repo&client_id=e4a6ce07e4dc3e8de2a7'>
          Login via Github
        </a>
      </nav>
    </header>
  )
}
