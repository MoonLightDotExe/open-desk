import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import WebcamCapture from './pages/WebcamCapture/WebcamCapture'
import Dashboard from './pages/Dashboard/Dashboard'
import AddEmployee from './pages/AddEmployee/AddEmployee'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/register"
              Component={Register}
            />
            <Route
              path="/login"
              Component={Login}
            />
            <Route
              path="/webcam"
              Component={WebcamCapture}
            />
            <Route
              path="/dashboard"
              Component={Dashboard}
            />
            <Route
              path="/add_employee"
              Component={AddEmployee}
            />
            <Route
            path='/videoPage'
            Component={VideoPage}
          />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  )
}

export default App
