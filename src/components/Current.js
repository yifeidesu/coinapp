import React from 'react';
import { fetchNew } from '../apiServices';

/**
 * This component show current price in a jumbotron.
 */
class Current extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            usdRate: 'Loading...',
            lastUpdate: ''
        };
    }

    componentDidMount() {
        fetchNew(this, [7])
    }

    render() {
        return (
            <div id='rate-div' className='jumbotron' style={{ padding: 0 }}>
                <h1>$ {this.state.usdRate}</h1>
            </div>
        );
    }
}

export default Current;