import { Link } from 'react-router-dom';
import './style.css';


function Sidebar() {
    return (
        <div className="sidebar"> {/* Adiciona a classe "sidebar" aqui */}
            <h3>Busca</h3>
            <h3>Autorizações</h3>
            <h3>Encomendas</h3>
            <h3>Reservas</h3>
            <div className="sidebarConfiguracao">
            <Link to='/Configuracoes' className="sidebarlink">Configurações</Link>
            </div>
        </div>
    )
}

export default Sidebar
