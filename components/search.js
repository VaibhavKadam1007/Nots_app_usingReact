import React from 'react'
import { MdSearch  } from 'react-icons/md'
const search = ({handleSearchNote}) => {
  return (
    <div className='search' >
      <MdSearch  className="search-icon" size="1.3em"/>
      <input onChange={(event)=>handleSearchNote(event.target.value)  } type='text' placeholder='search' />
    </div>
  )
}

export default search