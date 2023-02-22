import React from 'react'

const ListItem = ({note}) => {
    // console.log("PROPS:", props)
  return (
    <div>
        <h3>{note.body}</h3>
    </div>
  )
}

export default ListItem