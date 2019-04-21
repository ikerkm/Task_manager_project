import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Main_page = (props) => {
    const [boardname, setBoardName] = useState('');

    const [error, setError] = useState('');
    const id_user = "";





    if (localStorage.getItem('Authorization')) {
        console.log("Logged in");

        const the_token = localStorage.getItem('Authorization');
        axios.get('http://localhost:3000/users/tkn', { the_token }).then(res => {
            id_user = res.data._id;
        }).catch(err => {




        });
    }









    const make_board = (e) => {
        e.preventDefault();
        let form_verificator = false;
        for (let i = 0; i <= boardname.length; i++) {
            console.log("Making the loop" + i)
            if (boardname.charAt(i) === ' ' && boardname.charAt(i + 1) === ' ') {
                form_verificator = false;
            } else {
                form_verificator = true;
            }


        }


        if (form_verificator) {
            console.log("Sending to db...")
            axios.post('http://localhost:3000/save_board', { boardname, id_user }).then(res => {

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
        <div>
            <div className='current_boards'>
                <input type="button" value="New board" />

            </div>
            <div className="board_maker" >
                <form onSubmit={make_board}>
                    <label htmlFor="boardname">Board name</label>
                    <input name="boardname" onChange={(e) => setBoardName(e.target.value)} type="text" value={boardname} />
                    <input type="submit" value="Create board" />

                </form>

            </div>


        </div>



    )
}

export default Main_page;