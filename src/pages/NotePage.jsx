import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackLogo } from '../assets/arrow-left.svg';

const NotePage = ({match, history}) => {
  let noteId = match.params.id
  
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    if(noteId === 'new') return
    let response  = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    await fetch(`/api/notes/${noteId}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let createNote = async () => {
    await fetch(`/api/notes/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    history.push('/')
  }

  let handleSubmit = () => {
    if(noteId !== 'new' && !note.body) {
      deleteNote()
    }
    else if(noteId === 'new' && note !== null) {
      createNote()
    }
    else if(noteId !== 'new') {
      updateNote()
    }
    history.push('/')
  }
  
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <BackLogo onClick={handleSubmit}/>
        </h3>
        
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>DELETE</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
        <textarea 
          onChange={(e) => {setNote({...note, 'body': e.target.value})}} 
          value={note?.body}>
        </textarea>
    </div>
  )
}

export default NotePage