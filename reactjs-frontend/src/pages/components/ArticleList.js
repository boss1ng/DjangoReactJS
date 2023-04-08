import React from 'react'
import APIService from '../APIService'

function ArticleList(props) {

  const updateArticle = (articlesList) => {
    // Notify the PARENT (index.js) of which article has been clicked.
    props.articleBtn(articlesList)
  }

  const deleteArticle = (articlesList) => {
    // Notify the PARENT (index.js) of which article has been clicked.
    APIService.DeleteArticle(articlesList.id)
    .then( () => props.deleteBtn(articlesList))
    .catch(error => console.log(error))
  }

  return (
    <div>
        {props.articlesList && props.articlesList.map(articlesList => {
              return(
                <div key={articlesList.id} className='container'>
                  <h3>{ articlesList.title }</h3>
                  <p>{ articlesList.description }</p>

                  <div className='row'>
                    <div className='col-md-1'>
                      <button className='btn btn-primary'
                      onClick={ () => updateArticle(articlesList) }>
                          Update
                      </button>
                    </div>

                    <div className='col-md-1'>
                      <button className='btn btn-danger'
                      onClick={ () => deleteArticle(articlesList) }>
                          Delete
                      </button>
                    </div>
                  </div>

                  <hr />
                </div>
              );
            })}
    </div>
  )
}

export default ArticleList;