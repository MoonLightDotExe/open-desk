import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import WebcamCapture from './pages/WebcamCapture/WebcamCapture'
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/register'
            Component={Register}
          />
          <Route
            path='/login'
            Component={Login}
          />
          <Route
            path='/webcam'
            Component={WebcamCapture}
          />
          <Route
            path='/videoPage'
            Component={VideoPage}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
