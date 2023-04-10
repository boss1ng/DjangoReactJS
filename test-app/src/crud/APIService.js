// ADDED


export default class APIService {

// UDPATE - Article
    static UpdateArticle(article_id, body, token) {
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
                // 'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
            },
            body: JSON.stringify(body)
        })

        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

// CREATE / ADD - Article
    static InsertArticle(body, token) {
        return fetch('http://127.0.0.1:8000/articles/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
                // 'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
            },
            body: JSON.stringify(body)
        })

        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

// DELETE - Article
    static DeleteArticle(article_id, token) {
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            // 'Authorization': 'Token a1c1842048db2f425c0c11a97d9da373ed13b503'
            }
        })
        
        .catch(error => console.log(error))
    }

// VERIFY - Users
    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

// CREATE / ADD (REGISTER) - Users
    static RegisterUser(body) {
        return fetch('http://127.0.0.1:8000/users/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

}