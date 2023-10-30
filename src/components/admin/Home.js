import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LeftMenu from './LeftMenu'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header />
          <h1>Home Admin</h1>
          <Footer />
        </div>
        {/* <!-- ./wrapper --> */}
      </>
    )
  }
}

export default Home
