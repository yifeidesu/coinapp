
import React from 'react';
import { Line } from 'react-chartjs-2';
import { setLastWeekChange, getHistorical, fetchNew } from '../apiServices';

/**
 * This component show current price in a jumbotron.
 */
class Current extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), chartName: '',
            usdRate: 'Loading...', lastUpdate: ''
        };
    }

    componentDidMount() {
        fetchNew(this)
    }

    render() {
        return (
                <div id='rate-div' className='jumbotron'>
                    <p className='rt-text'>BTC current price</p>
                    <h1 className="display-1">$ {this.state.usdRate}</h1>
                </div>
        );
    }
}

export default Current;