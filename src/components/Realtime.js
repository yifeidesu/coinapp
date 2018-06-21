import React from 'react';
import { fetchNew } from '../apiServices';


class Realtime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), chartName: '',
            usdRate: 'Loading...', lastUpdate: ''
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.chartName} real-time price</h1>
                <button className='btn btn-lg' onClick={this.fetchNew}>Refresh</button>

                <div id='rate-div' className='jumbotron'>
                    <h1 className="display-1">$ {this.state.usdRate}</h1>
                    <p>Bitcoin Price</p>
                </div>
                <div id='compare-div' className='jumbotron'>
                    <div className="row">
                        <div className="col">
                            <h1>100</h1>
                            <p>Since Last Month, USD</p>
                        </div>
                        <div className="col">
                            <h1>200</h1>
                            <p>Since Last Month, %</p>
                        </div>
                    </div>
                </div>
                <div id='update-div' className='jumbotron'>
                    <h3 className='display-3'>price updated at {this.state.lastUpdate}</h3>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetchNew(this);
    }
}

export default Realtime;