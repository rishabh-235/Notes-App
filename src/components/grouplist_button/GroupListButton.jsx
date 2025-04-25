import React, {useContext} from 'react'
import "./grouplistbutton.style.css";
import { Link } from 'react-router-dom';
import { NotesContext } from '../../contextAPI/NotesProvider';

function GroupListButton({ group }) {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <Link to="/notes" onClick={()=> dispatch({ type: 'SELECT_GROUP', payload: group })}  className='grouplist-button'>
        <div className={`${group.color}`} >{group.thumbnailName}</div>
        <p>{group.name}</p>
    </Link>
  )
}

export default GroupListButton