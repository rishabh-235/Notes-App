import React from 'react'
import "./grouplistbutton.style.css";
import { Link } from 'react-router-dom';

function GroupListButton() {
  return (
    <Link to="/notes"  className='grouplist-button'>
        <div>MY</div>
        <p>My Notes</p>
    </Link>
  )
}

export default GroupListButton