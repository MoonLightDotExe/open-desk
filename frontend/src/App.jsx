import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="register" Component={Register} />
          <Route path="login" Component={Login} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
