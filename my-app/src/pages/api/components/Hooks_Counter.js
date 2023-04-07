import React, { Component } from 'react'

class Hooks_Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0,
      }
    }

    ClickMe = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h1>React Hooks</h1>
        <h2>{ this.state.count }</h2>
        <button className='btn btn-primary' onClick={ this.ClickMe }>Click Me</button>
      </div>
    )
  }
}

export default Hooks_Counter;