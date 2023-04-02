import './App.css'
import {EventForm, Header, SideButton} from './Components'

function App() {
  return (
    <div className='general'>
      <Header/>
      <div className='main-view'>
        <div className='sidebar'>
          <SideButton name="Add Event" handler={() => {console.log("Adding Event")}}/>
          <SideButton name="Edit Event" handler={() => {console.log("Edditng Event")}}/>
          <SideButton name="Manage Event" handler={() => {console.log("Managing Event")}}/>
        </div>
        <div className='editor'>
          <EventForm/>
        </div>
      </div>
    </div>
  )
}

export default App
