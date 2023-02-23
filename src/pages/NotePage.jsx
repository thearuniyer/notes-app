import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackLogo } from '../assets/arrow-left.svg';
// import notes from "../assets/data";

const NotePage = ({match, history}) => {
  let noteId = match.params.id
  // let note = notes.find(note => note.id === Number(noteId))
  // console.log(match);
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    let response  = await fetch(`http://localhost:8000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let handleSubmit = () => {
    updateNote()
    history.push('/')
  }
  
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <BackLogo onClick={handleSubmit}/>
          </Link>
        </h3>
      </div>
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage