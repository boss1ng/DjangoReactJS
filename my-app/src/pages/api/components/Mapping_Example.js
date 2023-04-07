import React from 'react'

function myElements(progLang) {
    return progLang.map(alisName =>
        
        <div key = {alisName}>
            {`${alisName}`}
        </div> 
    );
}

function Example(props) {
  return (
    <div>
        <h3>
            {myElements(props.names)}
        </h3>
    </div>
  )
}

export default Example;