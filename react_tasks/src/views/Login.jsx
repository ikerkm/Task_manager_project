import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setState] = useState('');
    const [error, setError] = useState('');
    useEffect(() => { console.log("Se ha actualizado") });
    const send = (e) => {
        e.preventDefault();
        console.log(password, email);

        axios.post('http://localhost:3000/users/auth', { email, password }).then(res => {
            localStorage.setItem('Authorization', res.headers.authorization);
            console.log(localStorage.getItem('Authorization'));
            setError('');
        }).catch(err => {
            console.log(err);
            setError('Credenciales incorrectos');
        });
    }




    return (
        <div className="login_div"><h3>Login</h3>
            <form onSubmit={send}>
                <label htmlFor="email">Email</label>
                <input name="email" onChange={(e) => setState(e.target.value)} type="text" value={email} />
                <label htmlFor="password">Password</label>
                <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                <span style={{ color: 'red' }} >{error}</span>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
export default Login;