import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
        <h1>Login</h1>
        <form
          action=""
          className="form"
        >
          <div className="form-class">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="inputs"
              required
            />
          </div>
          <div className="form-class">
            <label htmlFor="">Enter Password</label>
            <input
              type="text"
              className="inputs"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="login-right"></div>
    </div>
  )
}

export default Login
