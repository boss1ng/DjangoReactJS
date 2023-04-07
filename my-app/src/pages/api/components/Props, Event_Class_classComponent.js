import React, { Component } from "react";

class ClassComponent extends Component {

    /*
    ClickMe() {
        alert('CLASS Clicked.')
    }
    */

    render() {
        return(
            // PROPS are read-only property, meaning you cannot change their values.
            // Otherwise, it will cause an error.

            // For CLASS components, you can access props by using "this.props."

            <>
                <h1>CLASS Component</h1>
                <h2>My username is { this.props.uname }.</h2>

                {/* <button onClick = { this.ClickMe }>Click Me</button> */}
                <button className="btn btn-primary" onClick = { this.props.myclick }>Click Me</button>
            </>
        );
    }

}

export default ClassComponent;