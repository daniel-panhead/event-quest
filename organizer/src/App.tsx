import { useState } from 'react'
import './App.css'
import {EventForm, Header, ManagePanel, SideButton} from './Components'

function App() {
  const [view, setView] = useState(<EventForm/>);
  
  return (
    <div className='general'>
      <Header/>
      <div className='main-view'>
        <div className='sidebar'>
          <SideButton name="Add Event" handler={() => {setView(<EventForm/>)}}/>
          <SideButton name="Manage Event" handler={() => {setView(<ManagePanel setView={setView}/>)}}/>
        </div>
        <div className='editor'>
          {view}
        </div>
      </div>
    </div>
  )
}

export default App
