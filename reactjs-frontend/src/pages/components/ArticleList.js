import React from 'react'

function ArticleList(props) {
  return (
    <div>
        {props.articlesList && props.articlesList.map(articlesList => {
              return(
                <div key={articlesList.id} className='container'>
                  <h3>{ articlesList.title }</h3>
                  <p>{ articlesList.description }</p>
                  <hr/>
                </div>
              );
            })}
    </div>
  )
}

export default ArticleList;