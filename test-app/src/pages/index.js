import React from 'react'

// ADDED
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import ArticleList from '../components/ArticleList'
import Form from '../components/Form'

function Index() {

  const [articles, setArticles] = useState([])
  const [editedArticle, setEditArticle] = useState(null)
  const [token, setToken, removeToken] = useCookies(['userToken'])
  let navigate = useNavigate()

  useEffect( () => {
    fetch('http://127.0.0.1:8000/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['userToken']}`
      }
    })

    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  // PASS THE SELECTED (for Update) ARTICLE
  const updateArticle = (articles) => {
    setEditArticle(articles)
  }

  // PASS THE SELECTED (for Remove) ARTICLE
  const deleteArticle = (removeArticle) => {
    const new_article = articles.filter(myArticle => {
      if (myArticle.id === removeArticle.id) {
        return false;
      }

      else {
        return true;
      }
    })
    
    setArticles(new_article)
  }

  // PASS THE UPDATED ARTICLE (not saved yet)
  const UpdatedInformation = (updatedArticle) => {
    const new_article = articles.map(myArticle => {
      if (myArticle.id === updatedArticle.id) {
        return updatedArticle;
      }

      else {
        return myArticle;
      }
    })

    setArticles(new_article)
  }

  // SET TITLE & DESCRIPTION AS BLANK TEXT (to be used in Create/Add)
  const newArticle = () => {
    setEditArticle({title: '', description: ''})
  }

  // PASS EMPTY ARTICLE (Create/Add)
  const InsertedInformation = (newArticle) => {
    const new_article = [...articles, newArticle]
    setArticles(new_article)
    setEditArticle({title: '', description: ''})
  }

  // LOGOUT
  const logOut = () => {
    removeToken(['userToken'])
  }

  useEffect( () => {
    if (!token['userToken']) {
      navigate('/')
    }
  }, [token])

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark flex">
        <div class="container-fluid px-5">
          <a class="navbar-brand" href="/">ReactJS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">

              <li class="nav-item">
                <a class="nav-link active" href="/">Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">Articles</a>
              </li>

            </ul>
            <form class="d-flex">
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>

      <div style={{backgroundColor: "black"}}>
        <div className='container py-5'>
            <h1>Django & ReactJS</h1>

            <div className='row'>
              {/* NEW ARTICLE */}
              <div className='col'>
                <button className='btn btn-primary'
                  onClick={ newArticle }>
                  New Article
                </button>
              </div>

              {/* LOGOUT */}
              <div className='col'>
                <button className='btn btn-danger'
                  onClick={ logOut }>
                  Logout
                </button>
              </div>
            </div>

          <div className='container pt-5'>
            <ArticleList
                articlesList = { articles }
                articleBtn = { updateArticle }
                deleteBtn = { deleteArticle }>
            </ArticleList>

            {
              editedArticle ? 
                <Form articleToBeEdited = { editedArticle } 
                updateArticle = { UpdatedInformation }
                createArticle = { InsertedInformation } />
              : null
            }
          </div>

        </div>
      </div>
    </>

    
  );
}

export default Index;