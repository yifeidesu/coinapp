import React from 'react';
import Axios from "axios";
import { Line } from 'react-chartjs-2';
import { getHistorical } from '../apiServices';
import { Link } from 'react-router-dom';


var categoryUpdate = 'mon';

class MyChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = { dates: [], prices: [], category: 'mon' };
        // this.getHistorical = this.getHistorical.bind(this);
    }

    // initial data fetch
    componentDidMount() {
        console.log('componentDidMount called');

        //this.getHistorical();
        getHistorical(this, categoryUpdate);
    }

    // update data by category
    componentWillReceiveProps(nextProp) {
        console.log('componentWillReceiveProps called');



        categoryUpdate = nextProp.match.params.categoryId;
        console.log(categoryUpdate);


        this.setState({ category: categoryUpdate });

        //this.getHistorical();
        getHistorical(this, categoryUpdate);
    }

    render() {

        return (
            <div>
                <h1>Historical BPI in <span>USD</span></h1>

                <div class="btn-group" role="group" aria-label="Basic example">
                    <Link to="/charts/week" type="button" class="btn btn-secondary">1 Week</Link>
                    <Link to="/charts/month" type="button" class="btn btn-secondary">1 Month</Link>
                    <Link to="/charts/month3" type="button" class="btn btn-secondary">3 Months</Link>
                    <Link to="/charts/year" type="button" class="btn btn-secondary">1 Year</Link>
                </div>

                <Line data={
                    {
                        labels: this.state.dates,
                        datasets: [{
                            data: this.state.prices,
                            backgroundColor: 'rgba(255, 99, 132, 0.1)',
                            borderColor: 'rgba(255,165,0,1)',
                            borderWidth: 4,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            pointHoverBorderColor: 'rbg(0,0,0)',
                            lineTension:0
                            
                        }],
                    }
                } options={{
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: true,
                        
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,

                                labelString: 'Month'
                            },
                            gridLines: { color: "#eeeeee", drawBorder: true }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Price, USD'

                            },
                            gridLines: {
                                color: "#eeeeee",
                                drawBorder: true,
                                
                                zeroLineColor: 'red',
                                zeroLineWidth: '5px'
                            },
                          

                        }]
                    }
                }}

                />
            </div>
        );
    }
}





// /**
//  * 
//  * @param {Number} numberOfDays returns an endpoint to get data since numberOfDays ago.
//  */
// function getEndpoint(numberOfDays) {
//     let historical_endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';
//     let end = getFormattedDate(1);
//     let start = getFormattedDate(numberOfDays);
//     var endpoint = historical_endpoint + '?start=' + start + '&end=' + end;
//     return endpoint;
// }

// /**
//  * 
//  * @param {Number} period number of days between start and end dates.
//  */
// function getFormattedDate(period) {

//     let today = new Date();

//     // Number of days from start to end in terms of milliseconds
//     let millis = today.getTime() - (period * 86400000);
//     let formattedDate = new Date(millis).toISOString().slice(0, 10);

//     return formattedDate;
// }

export default MyChart;
