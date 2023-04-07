import React from 'react'

import ComponentB from './Hooks_useContext_ComponentB';

function ComponentA() {
  return (
    <div>
        <h1>React Hooks - useContext</h1>
        <h3>Component A</h3>
        <ComponentB></ComponentB>
        
    </div>
  )
}

export default ComponentA;