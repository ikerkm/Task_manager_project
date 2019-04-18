/**
 * board o tablero => /board
 * /login
 * /register
 *
 *
 *
 */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Board from './views/board';
import Login from './views/Login';
import Error404 from './views/Error404';
import Register from './views/Register'

const AppRouter = () => {

    if (localStorage.getItem('Authorization')) {
        console.log("Logged in");

        const the_token = localStorage.getItem('Authorization');
        axios.post('http://localhost:3000/users/tkn', { the_token }).then(res => {

        }).catch(err => {




        });

        return (
            <div>
                < BrowserRouter >
                    <NavLink activeClassName={'is-active'} activeStyle={{ fontSize: '1.5em', color: 'green' }} to='/login' exact>Login</NavLink>

                    <Switch>
                        <Route path="/login" component={Login} exact />
                        <Route path="/board/:id" component={Board} exact />
                        <Route path="*" component={Error404} />
                    </Switch>

                </BrowserRouter >
            </div>

        )



    } else {


        return (
            <div>
                < BrowserRouter >
                    <NavLink activeClassName={'is-active'} activeStyle={{ fontSize: '1.5em', color: 'green' }} to='/login' exact>Login</NavLink>
                    <NavLink activeClassName={'is-active'} activeStyle={{ fontSize: '1.5em', color: 'green' }} to='/register' exact>Register</NavLink>

                    <Switch>
                        <Route path="/login" component={Login} exact />
                        <Route path="/register" component={Register} exact />

                        <Route path="*" component={Error404} />
                    </Switch>

                </BrowserRouter >
            </div>

        )
    }
}




export default AppRouter;