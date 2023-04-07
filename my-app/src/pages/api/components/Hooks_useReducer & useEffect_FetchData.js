import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    article: {},
    error: '',
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'Success':
            return {
                loading: false,
                article: action.payload,
                error: ''
            }

        case 'Error':
            return {
                loading: false,
                article: {},
                error: 'Error on Data Fetching.'
            }
    }
}

function FetchDataReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/')
        .then(resp => {
            dispatch({type: 'Success', payload: resp.data})
        })

        .catch(error => {
            dispatch({type: 'Error'})
        })
    }, [])

  return (
    <div>
        <h1>React Hooks - useReducer</h1>
        <h3>{ state.loading ? 'Loading' : state.article.body }</h3>
        <h3>{ state.error ? state.error : null }</h3>
    </div>
  )
}

export default FetchDataReducer;