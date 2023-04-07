import React, { useState, useEffect } from 'react'

function Hooks_CounterHooks() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState('Sample Text')
    const [info, setInfo] = useState({name: '', email: ''})
    const [articles, setArticles] = useState(['Article 1', 'Article 2', 'Article 3'])

    const AddArticle = () => {
        setArticles([...articles, 'New Article'])
    }

    /*
    useEffect(() => {
        console.log("useEffect() is called.")
    }, [count, text])
    */

    useEffect(() => {
        console.log("useEffect() is called.")
        document.title = `You have clicked ${count} times.`
    })

  return (
    <div>
        <h1>React Hooks - useState</h1>
        <h3>{ count }</h3>
        <button className='btn btn-primary' onClick={ () => setCount(count+1) } >Click Me</button>
        <br/><br/>

        <h3>{ text }</h3>
        <button className='btn btn-danger' onClick={ () => setText('Changed Text') } >Change Text</button>
        <br/><br/>

        <input type='text' className='form-control' value={ info.name }
            onChange={e => setInfo({...info, name: e.target.value })}/>
        <input type='text' className='form-control' value={ info.email }
            onChange={e => setInfo({...info, email: e.target.value })}/>

        <h3>Name: { info.name }</h3>
        <h3>Email: { info.email }</h3>
        <br/><br/>

        {articles.map(articles => {
            return <h3 key={ articles }>{articles}</h3>
        })}
        <button className='btn btn-warning' onClick={ AddArticle } >Add New Entry</button>

        <h1>React Hooks - useEffect</h1>
        <button className='btn btn-primary' onClick={ () => setCount(count+1) } >Change Title</button>

    </div>
  )
}

export default Hooks_CounterHooks;