import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import ListItem from '../components/ListItem';

const NotesListPage = () => {
  // const notesList = notes.map((note, index) => {
  //   return (
      
  //   )
  // })
  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('http://localhost:8000/notes')
    let data = await response.json()
    setNotes(data)
  }
  
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {
          notes.map((note, index) => (
            <ListItem 
              key={index}
              note={note}
            />
          ))
        }
      </div>
      <AddButton />
    </div>
  )
}

export default NotesListPage