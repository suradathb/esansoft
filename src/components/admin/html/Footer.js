import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }

  render() {
    return (
      <>
        <footer className="main-footer">
          <strong>
            Copyright &copy; 2024{' '}
            <a href="#">Suradath.B</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
