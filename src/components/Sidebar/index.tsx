import { Link } from 'react-router-dom'
import './style.css'


function Sidebar() {
    return (
        <div className="sidebar"> {/* Adiciona a classe "sidebar" aqui */}
            <h3>Usuários</h3>
            <h3>Visitante</h3>
            <h3>Monitoramento</h3>
            <h3>Encomenda</h3>
        </div>
    )
}

export default Sidebar
