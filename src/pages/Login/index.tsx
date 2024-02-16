import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

function Login() {
    return (
        <div className="container">
            <Header />
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="button-group">
                        <button type="submit">Login</button>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>          
            <Footer />
        </div>
    )
}

export default Login;
