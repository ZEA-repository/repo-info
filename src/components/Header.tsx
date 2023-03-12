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
      </nav>
    </header>
  )
}
