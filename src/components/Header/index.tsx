import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <nav id="headerPrincipal">
            <h1>Allife</h1>
            <div className="headerLinks">
                <Link to='/' className="headerLink">Home</Link>
                <Link to='/login' className="headerLink">Login</Link>
                <Link to='/register' className="headerLink">Register</Link>
            </div>
        </nav>
    );
}

export default Header;
