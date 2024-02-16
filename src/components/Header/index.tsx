import { Link } from 'react-router-dom'
import './style.css'

function Header() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <h1>Allife</h1>
            <h3>Home</h3>
            <h3>Registro</h3>
            <h3>Login</h3>
        </nav>
    )
}

export default Header