import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className='register-left'>
        <h1>Register</h1>
        <form
          action=''
          className='form'
        >
          <div className='form-class'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              className='inputs'
              required
            />
          </div>
          <div className='form-class'>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              className='inputs'
              required
            />
          </div>
          <div className='form-class'>
            <label htmlFor=''>Contact Number</label>
            <input
              type='number'
              className='inputs'
              required
            />
          </div>
          <div className='form-class'>
            <label htmlFor=''>Set Password</label>
            <input
              type='password'
              className='inputs'
              required
            />
          </div>
          <div className='form-class'>
            <label htmlFor=''>Re Enter Password</label>
            <input
              type='password'
              className='inputs'
              required
            />
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>

      <div className='register-right'></div>
    </div>
  )
}

export default Register
