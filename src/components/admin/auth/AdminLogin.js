import React from 'react'

class AdminLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleLogin = () => {
   var usernametest = 'admin'
   var passwordtest = 'password@1'
    if(this.state.username === usernametest && this.state.password === passwordtest)
    {
      console.log('Logging in with', this.state.username, this.state.password);
    }else{
      window.location.reload();
    }
    
  }
  render() {
    return (
      <>
        <div className="hold-transition login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="#">
                <b>Admin</b>ESANSOFT
              </a>
            </div>
            {/* <!-- /.login-logo --> */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.handleLogin(this.state);
                }} method="post">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={(e) => this.setState({username: e.target.value})}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign In
                      </button>
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                </form>

                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2"></i> Sign in using
                    Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2"></i> Sign in using
                    Google+
                  </a>
                </div>
                {/* <!-- /.social-auth-links --> */}

                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">
                    Register a new membership
                  </a>
                </p>
              </div>
              {/* <!-- /.login-card-body --> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AdminLogin
