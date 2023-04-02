import { useState } from 'react'
import './App.css'
import {EventForm, Header, ManagePanel, SideButton} from './Components'

function App() {
  const [formVisibility, setFormVisibility] = useState(true);

  const showView = () => {
    if (formVisibility) {
      return <EventForm/>;
    }
    return <ManagePanel/>;
  }

  return (
    <div className='general'>
      <Header/>
      <div className='main-view'>
        <div className='sidebar'>
          <SideButton name="Add Event" handler={() => {setFormVisibility(true)}}/>
          <SideButton name="Manage Event" handler={() => {setFormVisibility(false)}}/>
        </div>
        <div className='editor'>
          {showView()}
        </div>
      </div>
    </div>
  )
}

export default App
