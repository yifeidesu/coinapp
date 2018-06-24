import React from "react";
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    componentDidMount() {

        // on li element selected, add class .active
        let lis = document.querySelectorAll('.nav-link');
        lis.forEach((element) => {
            element.addEventListener("click", function () {
                lis.forEach((li) => { li.classList.remove('active') });
                element.classList.toggle("active");
            });
        });
    }

    render() {
        return (
            <nav id='sidebar' className="sidebar d-none d-md-block">
                <div className='sidebar-sticky'>
                    <span className="navbar-brand text-center"><i className="fab fa-btc"></i><br />CoinApp</span>
                    <ul className="sidebar-nav">
                        <Link to='/' className="nav-link active"><i className="fas fa-home"></i>Home</Link>
                        <Link to='/fluc' className="nav-link"><i className="fas fa-clock"></i>Fluctuations</Link>
                        <Link to='/charts' className="nav-link"><i className="fas fa-chart-line"></i>Charts</Link>
                        <li><a className='nav-link' href="https://github.com/yifeidesu/coinapp"><i className="fab fa-github-alt"></i>GitHub Repo</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default Sidebar;