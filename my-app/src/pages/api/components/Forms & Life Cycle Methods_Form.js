import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      username: '',
      password: '',
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({
      posts: data
    }))
  }

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {

    const { posts } = this.state

    return (
      <div className='container'>
        
        <input className='form-control' type='text' placeholder='Enter your username'
            value = {this.state.username} onChange = { this.usernameHandler }></input>
        <input className='form-control' type='password' placeholder='Enter your password'
            value = {this.state.password} onChange = { this.passwordHandler }></input>
        <button className='btn btn-danger'>Submit</button>

        {posts.map(posts =>
          <>
            <h2 key = {posts.id}>{posts.id}: {posts.title}</h2>
          </>
        )}

      </div>
    )
  }
}

export default Form;