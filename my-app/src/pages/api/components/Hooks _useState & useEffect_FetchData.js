import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchData() {

    const [articles, setArticles] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => {
            console.log(resp.data)
            setArticles(resp.data)
        })

        .catch(error => console.log(error))
    }, [id])


  return (
    <div>
        <h1>React Hooks - useEffect</h1>
        <input type='text' value={id} onChange={ e => setId(e.target.value)} className='form-control' />
        <h3>{ articles.title }</h3>

        {/*
        {articles.map(articles => {
          return <h3 key={ articles.id }>{ articles.title }</h3>
        })}
        */}

    </div>
  )
}

export default FetchData;