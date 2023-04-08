import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// ADDED
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import ArticleList from './components/ArticleList'
import Form from './components/Form'

export default function Home() {

  const [articles, setArticles] = useState([])
  const [editedArticle, setEditArticle] = useState(null)

  useEffect( () => {
    fetch('http://127.0.0.1:8000/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='container bg-dark text-white'>
          <div style={{textAlign: 'center', padding: '10px'}}>
            <h1>Django & ReactJS</h1>

            <div className='row'>
              <div className='col'>
                <button className='btn btn-primary'
                  onClick={ newArticle }>
                  New Article
                </button>
              </div>
            </div>

          </div>

          <div className={styles.container}>
            <ArticleList
                articlesList = {articles}
                articleBtn = {updateArticle}
                deleteBtn = {deleteArticle}>
            </ArticleList>

            {
              editedArticle ? 
                <Form articleToBeEdited = {editedArticle} 
                updateArticle = {UpdatedInformation}
                createArticle = {InsertedInformation}/>
              : null
            }
            
          </div>
        </div>
      </main>
    </>
  )
}
