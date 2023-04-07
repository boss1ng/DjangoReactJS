import React, { Component } from 'react'

class Example2 extends Component {
    
    myElements(progLang) {
        return progLang.map(alisName =>
            
            <div key = {alisName}>
                {`${alisName}`}
            </div> 
        );
    }

    render() {
        return (
        <div>
            <h3>
                {this.myElements(this.props.names)}
            </h3>
        </div>
        )
    }
}

export default Example2;