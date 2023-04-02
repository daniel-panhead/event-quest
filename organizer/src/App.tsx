import './App.css'
import {Header, SideButton} from './Components'

function App() {
  return (
    <div className='general'>
      <Header/>
      <div className='sidebar'>
        <SideButton name="Add Event" handler={() => {console.log("Adding Event")}}/>
        <SideButton name="Edit Event" handler={() => {console.log("Edditng Event")}}/>
        <SideButton name="Manage Event" handler={() => {console.log("Managing Event")}}/>
      </div>
    </div>
  )
}

export default App
