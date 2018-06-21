import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Realtime from "./Realtime";
import MyChart from "./MyChart";
import ChartOptions from './ChartOptions'

const routes = [
  // Root route
  {
    path: "/",
    exact: true,
    sidebar: () => '',
    main: () => <h2>Home</h2>
  },

  {
    path: "/realtime",
    sidebar: () => <div>Realtime</div>,
    main: () =>
      <div>
        <h2>realtime conent </h2>
        <Realtime />
      </div>

  },
  {
    path: "/charts",
    sidebar: () => <div>Charts
      <ul>
        <li>week</li>
        <li>month</li>
      </ul>
    </div>,
    main: () => <h2>chart content </h2>
  }
];

const MyRouter = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className='row'>
          <nav id='sidebar' className='col-md-2'>
            <nav className="navbar d-flex justify-content-center align-items-start">
              <div className="sidebar-sticky">
                <div className='text-center'>
                  <span className='navbar-brand'><i className="fab fa-btc"></i><br />CoinApp</span>
                </div>
                <ul>
                  <li>
                    {/* link to path */}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/realtime">Realtime</Link>
                  </li>
                  <li>
                    <Link to="/charts">Charts</Link>
                  </li>

                </ul>
                <ul>

                  <li><a href="https://github.com/yifeidesu/coinapp">GitHub Repo</a></li>
                  <li><a href="https://www.coindesk.com/api/">API Source</a></li>
                </ul>
              </div>
            </nav>
          </nav>

          <div id='content' className='col-md-10 container'>
            <div style={{ flex: 1, padding: "10px" }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>


            <Route exact path="/" component={Realtime} />
            <Switch>
              <Route path="/charts/:categoryId" component={MyChart} />
              <Redirect from="/charts" to="/charts/mon" />
            </Switch>
          </div>
        </div>
      </div>

    </Router>
  );
}


export default MyRouter;