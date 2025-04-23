import './App.css'
import GroupList from './components/grouplist/GroupList.jsx';
import NoteEditor from './components/noteeditor/NoteEditor.jsx';

function App() {

  return (
    <div className='app-container'>
      <GroupList />
      <NoteEditor />
    </div>
  )
}

export default App
