import React from 'react'

import { MyContext } from '@/pages';

function ContextAPI_ComponentB() {
  return (
    <div>

        <MyContext.Consumer>
            {
                data => {
                    return <h2>{ data }</h2>
                }
            }
        </MyContext.Consumer>

        {/*
        <h1>This is Component B, nested from Component A.</h1>
        <h3>index.js contains ComponentA. And componentA.js contains ComponentB.
        Therefore, index displays Component B.</h3>
        */}
        
    </div>
  )
}

export default ContextAPI_ComponentB;