import React from 'react';
import { Line } from 'react-chartjs-2';
import { getHistorical } from '../apiServices';
import ChartBtns from './ChartBtns.js';

let category = 365;
class MyChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dates: [], prices: [], category: category };
    }

    // initial data fetch
    componentDidMount() {
        getHistorical(this, 365);
    }


    // update data by category
    componentWillReceiveProps(nextProp) {
        getHistorical(this, category);
    }


    render() {
        return (
            <div>
                <ChartBtns comp={this} />
                <Line id='line-graph' data={
                    {
                        labels: this.state.dates,
                        datasets: [{
                            data: this.state.prices,
                            backgroundColor: 'rgba(137, 43, 226, 0.2)',
                            borderColor: 'blueviolet',
                            borderWidth: 4,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            pointHoverBorderColor: 'rbg(0,0,0)',
                            lineTension: 0.1
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
                        intersect: true,
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
                            gridLines: { color: "#eeeeee", drawBorder: true },
                        }],
                        yAxes: [{
                            id: 'y-axis-0',
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Price, USD'
                            },
                            gridLines: {
                                color: "#eeeeee",
                                drawBorder: true,
                                zeroLineWidth: '5px'
                            },
                        }],
                    },
                }}
                />
            </div>
        );
    }
}

export default MyChart;
