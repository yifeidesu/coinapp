import React from 'react';
import { fetchNew } from '../apiServices';
import Current from './Current';

class Realtime extends React.Component {
    constructor(props) {
        super(props);

        // TODO remove. get state from, home <Realtime props={this.state.rate}>
        this.state = {
            date: new Date(),
            chartName: '',
            usdRate: 0,
            periods: [],
            changes: [],
            changesPercent: []
        };
    }

    componentDidMount() {
        fetchNew(this, [7]);
    }


    render() {

        let changeTextColor;
        if (this.state.changeLastWeek >= 0) {
            changeTextColor = { color: 'green' }
        } else {
            changeTextColor = { color: 'red' }
        }


        return (
            <div id='realtime-div jumbotron'>
                <Current />
                <p className='rt-text'>Last updated at <span className='fw-600' id='last-update-text'>{this.state.lastUpdate}</span></p>
                <h3 className='fw-600' style={changeTextColor}>$ {this.state.changes[0]} ({this.state.changesPercent[0]}%)
                    <span className='rt-text'> since last week</span></h3>
            </div>
        );
    }
}

export default Realtime;