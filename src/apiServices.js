import Axios from 'axios';

/**
 * Set state to given component with data fetched from endpoint.
 * @param {React.Component} component
 */
function fetchNew(component) {
    const index_endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    Axios.get(index_endpoint)
        .then(res => {
            const chartName = res.data.chartName;;
            const usdRate = res.data.bpi.USD.rate;
            const lastUpdate = res.data.time.updated;
            component.setState({
                chartName: chartName,
                usdRate: usdRate,
                lastUpdate: lastUpdate
            });
        })
        .catch(err => {
            console.log(err);
        });    
};

// Historical data
function getHistorical(component, category) {

    console.log('getHistorical, new received cate ===');
    console.log(category);

    // historical data url
    let endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';

    
    switch (category) {

        case 'week':
            endpoint = getEndpoint(7);
            break;
        case 'month3':
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

            component.setState({ dates: dates, prices: prices });
       
            console.log("historial data get!");      
        })
        .catch(err => {
            console.log(err);
        });
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
//var categoryUpdate;

export { fetchNew, getHistorical };