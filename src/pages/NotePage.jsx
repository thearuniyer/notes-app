import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackLogo } from '../assets/arrow-left.svg';
import notes from "../assets/data";

const NotePage = ({match}) => {
  let noteId = match.params.id
  let note = notes.find(note => note.id === Number(noteId))
  // console.log(match);
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <BackLogo />
          </Link>
        </h3>
      </div>
        <textarea value={note?.body}></textarea>
    </div>
  )
}

export default NotePage