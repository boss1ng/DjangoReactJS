import React, { useState, useEffect } from 'react'
import APIService from '../APIService'

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect( () => {
        setTitle(props.articleToBeEdited.title)
        setDescription(props.articleToBeEdited.description)
    }, [props.articleToBeEdited])

    const updateArticle = () => {
        APIService.UpdateArticle(props.articleToBeEdited.id, {title, description})
        .then(resp => props.updateUI(resp))
    }

  return (
    <div>
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
                    <button className='btn btn-success' 
                    onClick={ updateArticle }>
                        Update Article
                    </button>
                </div>
            </>
        ): null}
    </div>
  )
}

export default Form;