import { Link } from 'react-router-dom';
import logo from './spreaker-logo.png';

interface NavBarProps {
  title?: string;
  image?: string;
}

export function NavBar({ title = 'Spreaker Fake', image = logo }: NavBarProps) {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={image} alt={title} width="112" height="28" />
        </Link>
      </div>
    </nav>
  );
}
