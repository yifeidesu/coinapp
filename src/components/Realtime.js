import React from 'react';
import { fetchNew, setLastWeekChange, getAve } from '../apiServices';

class Realtime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            chartName: '',
            usdRate: 0,
            lastUpdate: '',
            lastWeek: [],
            changeLastWeek: 0,
            changeLastWeekPercent: 0
        };
    }

    componentDidMount() {
        fetchNew(this)
    }

    render() {



        let arrowHtml;
        let changeTextColor;
        if (this.state.changeLastWeek >= 0) {
            arrowHtml = <i className="fas fa-arrow-up"></i>;
            changeTextColor = { color: 'green' }
        } else {
            arrowHtml = <i className="fas fa-arrow-down"></i>;
            changeTextColor = { color: 'red' }
        }

        var comp = this;

        return (

            <div id='rt-div'>
                <div id='heading-div' className="row jumbotron">
                    <div className='col-md-10'>
                        <p className='rt-text'>Update every minute, last updated at<br />
                            <span id='last-update-text'>{this.state.lastUpdate}</span></p>
                    </div>
                    <div className='col-md-2'>
                        <button id='refresh-btn' className='btn' onClick={function () { fetchNew(comp) }}>Refresh</button>
                    </div>
                </div>
                <div id='rate-div' className='jumbotron'>
                    <p className='rt-text'>BTC current price</p>
                    <h1 className="display-1">$ {this.state.usdRate}</h1>
                </div>
                <div id='compare-div' className='jumbotron'>
                    <p className='rt-text'>Change since last week</p>
                    <h1 style={changeTextColor}>$ {this.state.changeLastWeek} ({this.state.changeLastWeekPercent}%) {arrowHtml}</h1>
                </div>
                
            </div>
        );
    }


}

export default Realtime;