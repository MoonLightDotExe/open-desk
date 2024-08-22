import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import WebcamCapture from './pages/WebcamCapture/WebcamCapture'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="register" Component={Register} />
          <Route path="login" Component={Login} />
          <Route path="webcam" Component={WebcamCapture} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
