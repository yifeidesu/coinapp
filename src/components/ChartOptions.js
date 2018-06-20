import React from 'react';
import { Link } from "react-router-dom";

class ChartOptions extends React.Component {


    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        var match = this.props.match;
        return (
            <nav>
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
            </nav>
        );
    }
}

export default ChartOptions;
