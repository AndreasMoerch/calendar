import './App.css'
import { ListView } from './components/ListView'
import { LEGOSets } from './data'

function App() {

  return (
    <>
      <div>
        <ListView sets={LEGOSets("en-US")} /> 
      </div>
    </>
  )
}

export default App
