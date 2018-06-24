
import React from 'react';
import { Line } from 'react-chartjs-2';
import { fetchNew } from '../apiServices';
import Realtime from './Realtime';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), chartName: '',
            usdRate: 'Loading...', lastUpdate: ''
        };
    }

    componentDidMount() {

        //getHistorical(this, 31);
        fetchNew(this, [7])
    }

    render() {
        return (
            <div>
                <Realtime />

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
                        display: false,
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
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            },
                            gridLines: {
                                display: false,
                                color: "#eeeeee", drawBorder: true
                            }
                        }],
                        yAxes: [{
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Price, USD'
                            },
                            gridLines: {
                                display: true,
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

export default Home;