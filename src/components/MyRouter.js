import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Realtime from "./Realtime";
import MyChart from "./MyChart";
import ChartOptions from './ChartOptions'

class MyRouter extends React.Component {

  constructor(props) {
    super(props);

    console.log('===MYROUTER');
    console.log(this.props);

  }

  render() {
    return (
     
        <Router>
          <div className='row d-flex align-items-stretch'>
            <div id='sidebar' className='col-sm-2 align-self-stretch'>
              <nav className="nav">
                <li>
                  <Link to="/">Realtime</Link>
                </li>
                <li>
                  <Link to="/charts">Charts</Link>
                  
                  <Route path={'/charts'} component={ChartOptions} />
                </li>
              </nav>
            </div>
            <div id='content' className='col-sm-10'>
              <Route exact path="/" component={Realtime} />
              <Route path="/charts/:categoryId" component={MyChart} />
            </div>
          </div>
        </Router>
   

    );
  }


}


// const ChartDisplay = ({ match }) => (
//   <div>
//     <Route path={`${match.url}/:categoryId`} component={Chart} />
//   </div>
// );

export default MyRouter;