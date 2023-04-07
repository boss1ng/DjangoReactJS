import React, { Component } from "react";

class NameClassComp extends Component {

    constructor() {
        super()
        this.state = {
            name: "Joey Bryan Pintor"
        }
    }

    clickedMe = () => {
        this.setState({
            // name: "JBAP"

            // TERNARY OPERATOR (If-Else)
            // Condition ? If TRUE : If FALSE
            name: this.state.name === "Joey Bryan Pintor" ? "JBAP" : "Joey Bryan Pintor"
        })
    }

    render() {
        return(
            <>
                <h1>{ this.state.name }</h1>
                <button className="btn btn-warning" onClick = { this.clickedMe }>Change Text</button>
            </>
        );
    }
}

export default NameClassComp;

/*
clickedMe() {
    this.setState({
        name: "JBAP"
    })
}

render() {
    return(
        <>
            <h1>{ this.state.name }</h1>
            <button className="btn btn-warning" onClick = { () => this.clickedMe() }>Change Text</button>
        </>
    );
}
*/