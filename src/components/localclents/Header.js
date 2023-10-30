import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }

  render() {
    return (
      <>
        <h1>Header User Local</h1>
      </>
    )
  }
}

export default Header
