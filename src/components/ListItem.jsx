import React from 'react'
import { Link } from 'react-router-dom'

const getTitle = (note) => {
  const title = note.body.split('\n')[0]

  return title
}

const getDate = (note) => {
  const niceDate = new Date(note.updated).toLocaleString().substring(0, 17)

  return niceDate
}

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>
        <h3>{getTitle(note)}</h3>
        <p><span>{getDate(note)}</span></p>
      </div>
    </Link>
  )
}

export default ListItem