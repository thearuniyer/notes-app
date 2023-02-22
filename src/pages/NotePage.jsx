import React from 'react';
import { useParams } from 'react-router-dom';

const NotePage = (props) => {
  console.log("props:", props);
  return (
    <div>
        <h1>This is a single note page</h1>
    </div>
  )
}

export default NotePage