import React, { useContext } from 'react'

import { MyContext } from '@/pages';

function ComponentB() {

  const data = useContext(MyContext)

  return (
    <div>
        <h1>React Hooks - useContext</h1>
        <h3>Component B</h3>
        <h3>{ data }</h3>
    </div>
  )
}

export default ComponentB;