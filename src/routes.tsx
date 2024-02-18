import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Configuracoes from './pages/Configuracoes'

function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Configuracoes" element={<Configuracoes />} />
        </Routes>
    )
}

export default MainRoutes