import React from "react";

function FuncComponent(props) {

    function ClickMe() {
        alert('FUNCTIONAL Clicked.')
    }

    return(
        <>
            <h1>FUNCTION Component.</h1>
            <h2>My name is {props.fname} {props.lname}.</h2>

            <button className="btn btn-success" onClick = { ClickMe }>Click Me</button>
        </>
    );
}

export default FuncComponent;