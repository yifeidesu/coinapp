import React from 'react';
import Axios from "axios";
import { Line } from 'react-chartjs-2';


var categoryUpdate;

class MyChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = { dates: [], prices: [], category: 'mon' };
        this.getHistorical = this.getHistorical.bind(this);
    }

    // initial data fetch
    componentDidMount() {
        this.getHistorical();
    }

    // update data by category
    componentWillReceiveProps(nextProp) {
        
        categoryUpdate = nextProp.match.params.categoryId;

        this.setState({ category: categoryUpdate });
        this.getHistorical();
    }

    getHistorical() {

        // base url
        let endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';

        switch (categoryUpdate) {

            case 'wk':
                endpoint = getEndpoint(7);
                break;
            case 'mon3':
                endpoint = getEndpoint(90);
                break;
            case 'year':
                endpoint = getEndpoint(365);
                break;
            default:
                endpoint = getEndpoint(31);
        }

        Axios.get(endpoint)
            .then(res => {

                const bpi = res.data.bpi;
                const dates = Object.keys(bpi);
                const prices = Object.values(bpi);

                this.setState({ dates: dates, prices: prices });

                console.log("historial data get!");
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        return (
            <div>
                <h1>Historical BPI in <span>USD</span></h1>

                <Line data={
                    {
                        labels: this.state.dates,
                        datasets: [{
                            label: 'Price',
                            data: this.state.prices,
                            backgroundColor: 'rgba(255, 99, 132, 0)',
                            borderColor: 'rgba(255,165,0,1)',
                            borderWidth: 2,
                            pointRadius: 0,
                            pointHoverRadius: 2
                        }]
                    }
                } />
            </div>
        );
    }
}

/**
 * 
 * @param {Number} numberOfDays returns an endpoint to get data since numberOfDays ago.
 */
function getEndpoint(numberOfDays) {
    let historical_endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    let end = getFormattedDate(1);
    let start = getFormattedDate(numberOfDays);
    var endpoint = historical_endpoint + '?start=' + start + '&end=' + end;
    return endpoint;
}

/**
 * 
 * @param {Number} period number of days between start and end dates.
 */
function getFormattedDate(period) {

    let today = new Date();

    // Number of days from start to end in terms of milliseconds
    let millis = today.getTime() - (period * 86400000);
    let formattedDate = new Date(millis).toISOString().slice(0, 10);

    return formattedDate;
}

export default MyChart;
