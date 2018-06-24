import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Realtime from "./Realtime";
import MyChart from "./MyChart";
import Sidebar from './Sidebar';
import Fluc from './Fluc';

class CoinApp extends React.Component {

  componentDidMount() {

    // on li element selected, add class .active
    let lis = document.querySelectorAll('li');
    lis.forEach((element) => {
      element.addEventListener("click", function () {
        lis.forEach((li) => { li.classList.remove('active') });
        element.classList.toggle("active");
      });
    });
  }

  render() {

    return (
      <Router className="">
        <div className='row'>
          <div className='col-lg-2'>
            <Sidebar />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <main className="col-lg-9">
            <div className="containter">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}

            </div>
          </main>
        </div>
      </Router>
    );
  }
}

const routes = [

  {
    path: "/",
    exact: true,
    sidebar: () => '',
    main: () =>
      <div>
        <Realtime />
        <MyChart />
      </div>
  },

  {
    path: "/fluctuations",
    sidebar: () => <div>Fluctuations</div>,
    main: () => {
      return (
        <div>
          <Fluc />
        </div>
      );
    }
  },

  {
    path: "/charts",
    sidebar: () => <div>MyChart</div>,
    main: () =>
      <div>
        <MyChart />
      </div>
  },
];


export default CoinApp;