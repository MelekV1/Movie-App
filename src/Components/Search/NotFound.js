import React from 'react'
import "./search.css"
export default function NotFound(){
  return (
    <React.Fragment>
      <div className ="container">
          <div className="notFound">
            <img src="no-result.jpg" alt='Search Failed'/>
          </div>
      </div>
    </React.Fragment>
  )
}
