
import React from 'react';
import { Line } from 'react-chartjs-2';
import { setLastWeekChange, getHistorical, fetchNew } from '../apiServices';
import Current from './Current';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), chartName: '',
            usdRate: 'Loading...', lastUpdate: ''
        };
    }

    componentDidMount() {
        setLastWeekChange(this);
        console.log(this.state);
        console.log(this);

        getHistorical(this, 'mon');
        fetchNew(this)
    }

    render() {
        return (
            <div>
                <Current />

                
                {/* <div id='rate-div' className='jumbotron'>
                    <p className='rt-text'>BTC current price</p>
                    <h1 className="display-1">$ {this.state.usdRate}</h1>
                </div> */}
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