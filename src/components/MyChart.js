import React from 'react';
import { Line } from 'react-chartjs-2';
import { getHistorical } from '../apiServices';
import { Link } from 'react-router-dom';

let categoryUpdate = 'mon';
class MyChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dates: [], prices: [], category: 'mon' };
    }


    // initial data fetch
    componentDidMount() {
        console.log('componentDidMount called');

        getHistorical(this, categoryUpdate);
    }


    // update data by category
    componentWillReceiveProps(nextProp) {
        console.log('componentWillReceiveProps called');

        categoryUpdate = nextProp.match.params.categoryId;
        this.setState({ category: categoryUpdate });

        getHistorical(this, categoryUpdate);
    }


    render() {

        return (
            <div>
                <h1 id='chart-header'>Historical Price in <span>USD</span></h1>
                <p id='period-type'></p>
                <div className="btn-group" role="group">
                    <Link to="/charts/week" type="button" className="btn btn-primary">1W</Link>
                    <Link to="/charts/month" type="button" className="btn btn-primary">1M</Link>
                    <Link to="/charts/month3" type="button" className="btn btn-primary">3M</Link>
                    <Link to="/charts/year" type="button" className="btn btn-primary">1Y</Link>
                </div>

                <Line data={
                    {
                        labels: this.state.dates,
                        datasets: [{
                            data: this.state.prices,
                            backgroundColor: 'rgba(48,79,254,0.2)',
                            borderColor: '#304FFE',
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

export default MyChart;
