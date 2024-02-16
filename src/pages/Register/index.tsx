import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

function Register() {
    const [fullName, setFullName] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [unit, setUnit] = useState('');
    const [status, setStatus] = useState('');
    const [observation, setObservation] = useState('');

    const handleRegister = () => {
        // Aqui você pode implementar a lógica para enviar os dados do formulário
        console.log({
            fullName,
            rg,
            cpf,
            phone,
            email,
            unit,
            status,
            observation
        });
    };

    return (
        <div>
            <Header />
            <div className="register-form">
                <h1>Registro</h1>
                <div>
                    <label>Nome Completo:</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <label>RG:</label>
                    <input type="text" value={rg} onChange={(e) => setRg(e.target.value)} />
                </div>
                <div>
                    <label>CPF:</label>
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </div>
                <div>
                    <label>Celular:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Unidade:</label>
                    <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />
                </div>
                <div>
                    <label>Status:</label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                </div>
                <div>
                    <label>Observação:</label>
                    <textarea value={observation} onChange={(e) => setObservation(e.target.value)} />
                </div>
                <button onClick={handleRegister}>Registrar</button>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
