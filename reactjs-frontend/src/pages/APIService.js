import React, { Component } from 'react'

export default class APIService {

// UDPATE 
    static UpdateArticle(article_id, body) {
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
            },
            body: JSON.stringify(body)
        })

        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

// CREATE / ADD
    static InsertArticle(body) {
        return fetch('http://127.0.0.1:8000/articles/', {
            'method': 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
            },
            body: JSON.stringify(body)
        })

        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

// DELETE
    static DeleteArticle(article_id) {
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
            }
        })
        
        .catch(error => console.log(error))
    }
}