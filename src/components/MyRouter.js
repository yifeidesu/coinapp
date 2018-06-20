import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Realtime from "./Realtime";
import MyChart from "./MyChart";
import ChartOptions from './ChartOptions'

class MyRouter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className='row'>
            <nav id='sidebar' className='col-md-2'>
              <nav className="navbar d-flex align-items-baseline">
                <div className="sidebar-sticky">
                  <span className="navbar-brand">CoinApp</span>
                  <ul className="nav flex-column">
                    <li>
                      <Link to="/">Realtime</Link>
                    </li>
                    <li>
                      <Link to="/charts">Charts</Link>
                      <ul id="chart-options">
                        <li>
                          <Link to={"/charts/wk"}>Week</Link>
                        </li>
                        <li>
                          <Link to={"/charts/mon"}>Month</Link>
                        </li>
                        <li>
                          <Link to={"/charts/mon3"}>3-Month</Link>
                        </li>
                        <li>
                          <Link to={"/charts/year"}>Year</Link>
                        </li>
                      </ul>
                    </li>
                    <li>GitHub Repo</li>
                    <li>API source</li>
                  </ul>
                </div>
              </nav>
            </nav>
            <div id='content' className='col-md-10 container'>
              <Route exact path="/" component={Realtime} />
              <Route path="/charts" component={MyChart} />
              <Route path="/charts/:categoryId" component={MyChart} />
            </div>
          </div>
        </div>

      </Router>
    );
  }
}

export default MyRouter;