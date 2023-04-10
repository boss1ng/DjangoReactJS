import React from 'react'

//ADDED
import { useState, useEffect } from 'react'
import APIService from '../crud/APIService'
import { useCookies } from 'react-cookie'

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token, setToken] = useCookies(['userToken'])

    useEffect( () => {
        setTitle(props.articleToBeEdited.title)
        setDescription(props.articleToBeEdited.description)
    }, [props.articleToBeEdited])

    const updateArticle = () => {
        APIService.UpdateArticle(props.articleToBeEdited.id, {title, description}, token['userToken'])
        .then(resp => props.updateArticle(resp))
        // .then(resp => console.log(resp))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title, description}, token['userToken'])
        .then(resp => props.createArticle(resp))
        // .then(resp => console.log(resp))
    }

  return (
    <div className='container'>

        {props.articleToBeEdited ? (
            <>
                {/* TITLE */}
                <div className='mb-3'>
                    <label htmlFor='=title' className='form-label'>Title</label>
                    <input type='text' className='form-control' id='title'
                    placeholder='Please enter a title...' value={ title }
                    onChange={ e => setTitle(e.target.value) }/>
                </div>

                {/* DESCRIPTION */}
                <div className='mb-3'>
                    <label htmlFor='=description' className='form-label'>Description</label>
                    <textarea type='text' className='form-control' rows={5}
                    placeholder='Please enter a description...' value={ description }
                    onChange={ e => setDescription(e.target.value) }></textarea>
                </div>

                <div className='my-4'>
                    {
                        props.articleToBeEdited.id ?
                            <button className='btn btn-success' 
                                onClick={ updateArticle }>
                                Update
                            </button>
                        : 
                            <button className='btn btn-warning' 
                                onClick={ insertArticle }>
                                Add
                            </button>
                    }
                </div>
            </>
        ): null}
        
    </div>
  )
}

export default Form;