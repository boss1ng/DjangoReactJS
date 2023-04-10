import React from 'react'

//ADDED
import { useState, useEffect } from 'react'
import APIService from '../crud/APIService'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['userToken'])
  const [isLogin, setLogin] = useState(true)
  let navigate = useNavigate()

  useEffect( () => {
    if (token['userToken']) {
      navigate('/articles')
    }
  }, [token])

  const loginUser = () => {
    APIService.LoginUser({username, password})
    .then(resp => setToken('userToken', resp.token))
    .catch(error => console.log(error))
  }

  // UPON REGISTRATION, LOGGED IN
  const registerUser = () => {
    APIService.RegisterUser({username, password})
    .then( () => loginUser())
    .catch(error => console.log(error))
  }
  

  // UPON REGISTRATION, NEED TO LOG IN
  /*
  const registerUser = () => {
    APIService.RegisterUser({username, password})
    .then(resp => setUsername(''))
    .then(resp => setPassword(''))
    .then(resp => setLogin(true))
    .then(resp => setToken('userToken', resp.token))
    .catch(error => console.log(error))
  }
  */

  return (
    <div className='App'>
      <div className='py-5'>
        <div className='container'>

          {isLogin
          ? <h1>LOGIN PAGE</h1>
          : <h1>REGISTRATION PAGE</h1>
          }    

{/* LOGIN */}
          {/* USERNAME */}
          <div className='mb-3'>
              <label htmlFor='=username' className='form-label'>Username</label>
              <input type='text' className='form-control' id='username'
              placeholder='Please enter a username...' value={ username }
              onChange={ e => setUsername(e.target.value) }/>
          </div>

          {/* PASSWORD */}
          <div className='mb-3'>
              <label htmlFor='=password' className='form-label'>Password</label>
              <input type='text' className='form-control' id='password'
              placeholder='Please enter a password...' value={ password }
              onChange={ e => setPassword(e.target.value) }/>
          </div>

          {isLogin
          ?
            <button className='btn btn-success' 
                onClick={ loginUser } >
                Login
            </button>
          :
            <button className='btn btn-primary' 
                onClick={ registerUser } >
                Register
            </button>
          }

          
          
{/* REGISTRATION */}
          <div className='container mt-5'>
            {isLogin
            ?
              <h5>If you don't have an account yet,
                <button className='btn btn-primary' onClick={ () => setLogin(false) }>Register now</button>
              </h5>
            : <h5>If you have an account already,
                <button className='btn btn-success' onClick={ () => setLogin(true) }>Login</button>
              </h5>
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;