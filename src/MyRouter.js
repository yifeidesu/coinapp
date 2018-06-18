import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Realtime from "./components/Realtime";
import MyChart from "./components/MyChart";

const MyRouter = () => (
  <Router>
    <div className='row'>
      <div id='sidebar' className='col-lg-3 d-flex justify-content-center'>
        <ul className="nav">
          <li>
            <Link to="/">Realtime</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
            
              <Redirect from='/charts' to='/charts/mon' />
              <Route path="/charts" component={ChartsMenu} />
            
          </li>
        </ul>
      </div>
      <div id='content' className='col-lg-9 d-flex justify-content-center'>
        <Route exact path="/" component={Home} />
        <Route path="/charts" component={ChartDisplay} />
      </div>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Realtime</h2>
    <Realtime />
  </div>
);

const ChartsMenu = ({ match }) => (

  <div className='col'>
    <ul>
      <li>
        <Link to={`${match.url}/wk`}>Week</Link>
      </li>
      <li>
        <Link to={`${match.url}/mon`}>Month</Link>
      </li>
      <li>
        <Link to={`${match.url}/mon3`}>3-Month</Link>
      </li>
      <li>
        <Link to={`${match.url}/year`}>Year</Link>
      </li>
    </ul>
  </div>

);

const ChartDisplay = ({ match }) => (
  <div>
    <Route path={`${match.url}/:categoryId`} component={Chart} />
  </div>
);

const Chart = ({ match }) => {

  const categoryId = match.params.categoryId;
  return (<MyChart category={categoryId} />);
};


export default MyRouter;