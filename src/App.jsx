import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Albums from './Components/Albums'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Albums />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
