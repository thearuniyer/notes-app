import React from 'react';
import notes from '../assets/data';
import ListItem from '../components/ListItem';

const NotesListPage = () => {
  const notesList = notes.map((note, index) => {
    return (
      <ListItem 
        key={index}
        note={note}
      />
    )
  })
  return (
    <div>
      <div className='notes-list'>
        {notesList}
      </div>
    </div>
  )
}

export default NotesListPage