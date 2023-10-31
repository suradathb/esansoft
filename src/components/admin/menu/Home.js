import React from 'react'
import Header from '../html/Header'
import Footer from '../html/Footer'
import LeftMenu from '../html/LeftMenu'
import { Link } from 'react-router-dom'

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
          <LeftMenu />
          <div class="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">Dashboard</h1>
                  </div>
                  {/* <!-- /.col --> */}
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <Link to="/admin">Home</Link>
                      </li>
                      <li class="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  <div className="col-lg-3 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>150</h3>

                        <p>New Orders</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag"></i>
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-3 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>
                          53<sup >%</sup>
                        </h3>

                        <p>Bounce Rate</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-3 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3>44</h3>

                        <p>User Registrations</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add"></i>
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-3 col-6">
                    {/* <!-- small box --> */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>65</h3>

                        <p>Unique Visitors</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph"></i>
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /.content-header --> */}
          </div>
          <Footer />
        </div>
        {/* <!-- ./wrapper --> */}
      </>
    )
  }
}

export default Home
