import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {   

  return (
    <>
    <div>Error</div>
        <div>
      <p style={{color:"red"}}>We're sorry, but we could not find the author you are looking for.</p>
      <p style={{color:"red"}}>Would you like to add this author to our database?</p>
      <Link to="/author/create">Click here to add the author</Link>
    </div>
  </>
  )
}

export default Error