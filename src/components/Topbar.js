import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Realtime from "./Realtime";
import MyChart from "./MyChart";
import Home from "./Home";

class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }

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
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="#">CoinApp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li><a href="https://github.com/yifeidesu/coinapp"><i className="fab fa-github-alt"></i>GitHub Repo</a></li>
                    </ul>
                </div>
            </nav>
        );


    }
}

{/* <nav className="navbar col=12 d-flex justify-content-center align-items-start">
               
                  <div className='text-center'>
                    <span className='navbar-brand'><i className="fab fa-btc"></i><br />CoinApp</span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/"><i className="fas fa-home"></i>Home</Link>
                    </li>
                    <li>
                      <Link to="/fluctuations"><i className="fas fa-clock"></i>Realtime</Link>
                    </li>
                    <li>
                      <Link to="/charts"><i className="fas fa-chart-line"></i>Charts</Link>
                    </li>
                  </ul>
                  <ul>
                    <li><a href="https://github.com/yifeidesu/coinapp"><i className="fab fa-github-alt"></i>GitHub Repo</a></li>
                    <li><a href="https://www.coindesk.com/api/"><i className="fas fa-database"></i>API Source</a></li>
                  </ul>
               
              </nav>
         */}

export default Topbar;