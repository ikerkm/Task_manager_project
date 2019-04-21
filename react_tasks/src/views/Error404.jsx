import React, { Component, useState, useEffect } from 'react';


const Error404 = (props) => {
    /* const unblock = props.history.block((location, action) => {
         unblock();
         return "Are you sure you want to leave this page?";
 
 
     }
 
     );*/
    return (
        <div>Error 404

<button onClick={props.history.goBack}>Volver</button>
            <button onClick={props.history.goForward}>Next</button>
            <button onClick={() => props.history.go(-2)}>Volver x2</button>
            <button onClick={() => props.history.push("/404")}>ir a 404</button>
        </div>
    )
}

export default Error404;