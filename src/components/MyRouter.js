import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Realtime from "./Realtime";
import MyChart from "./MyChart";
import Home from "./Home";

const routes = [
  // Root route
  {
    path: "/",
    exact: true,
    sidebar: () => '',
    main: () => <Home />
  },

  {
    path: "/realtime",
    sidebar: () => <div>Realtime</div>,
    main: () =>
      <div>      
        <Realtime />
      </div>
  },
];

const MyRouter = () => {

  return (
    <Router>
      <div className="container-fluid">
        <div className='row'>
          <nav id='sidebar' className='col-md-2 d-none d-md-block'>
            <nav className="navbar d-flex justify-content-center align-items-start">
              <div className="sidebar-sticky">
                <div className='text-center'>
                  <span className='navbar-brand'><i className="fab fa-btc"></i><br />CoinApp</span>
                </div>
                <ul>
                  <li>
                    <Link to="/"><i className="fas fa-home"></i>Home</Link>
                  </li>
                  <li>
                    <Link to="/realtime"><i className="fas fa-clock"></i>Realtime</Link>
                  </li>
                  <li>
                    <Link to="/charts"><i className="fas fa-chart-line"></i>Charts</Link>
                  </li>
                </ul>
                <ul>
                  <li><a href="https://github.com/yifeidesu/coinapp"><i className="fab fa-github-alt"></i>GitHub Repo</a></li>
                  <li><a href="https://www.coindesk.com/api/"><i className="fas fa-database"></i>API Source</a></li>
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