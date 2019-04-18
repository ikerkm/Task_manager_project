import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [ConfPassword, setConfPassword] = useState('');
    const [email, setState] = useState('');
    const [error, setError] = useState('');
    useEffect(() => { console.log("Se ha actualizado") });
    const send = (e) => {
        e.preventDefault();

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }



        console.log(password, email);
        let form_verificator = true;
        console.log(name.length);
        if (name && email && password && ConfPassword) {
            console.log("Working_1")
            for (let i = 0; i <= name.length; i++) {
                console.log("Making the loop" + i)
                if (name.charAt(i) === ' ' && name.charAt(i + 1) === ' ') {
                    form_verificator = false;
                } else {

                }


            }



            if (validateEmail(email)) {
                console.log("Working_3")

            } else {
                form_verificator = false;
                console.log("NotWorking_3")
            }
            if (password === ConfPassword) {
                console.log("Working_4")


            } else {
                form_verificator = false;
                console.log("NotWorking_4")


            }












        } else {
            form_verificator = false;
            console.log("NotWorking_1")
        }


        if (form_verificator) {
            console.log("Sending to db...")
            axios.post('http://localhost:3000/users', { name, email, password }).then(res => {

                setError('');
            }).catch(err => {
                console.log(err);
                setError('Credenciales incorrectos');
            });

        } else {
            console.log("Somehting went wrong");
        }




    }




    return (
        <div className="register_div"><h3>Login</h3>
            <form onSubmit={send}>
                <label htmlFor="name">Name</label>
                <input name="name" onChange={(e) => setName(e.target.value)} type="text" value={name} />
                <label htmlFor="email">Email</label>
                <input name="email" onChange={(e) => setState(e.target.value)} type="text" value={email} />
                <label htmlFor="password">Password</label>
                <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                <label htmlFor="ConfPassword">Repeat password</label>
                <input name="ConfPassword" onChange={(e) => setConfPassword(e.target.value)} type="password" value={ConfPassword} />
                <span style={{ color: 'red' }} >{error}</span>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
export default Register;