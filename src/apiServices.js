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
            setLastWeekChange(component, usdRate);
        })
        .catch(err => {
            console.log(err);
        });
};

/**
 * Set state of change and change percent to given component.
 * @param {React.Component} component 
 * @param {String} priceCurrent 
 */
function setLastWeekChange(component, priceCurrent) {

    const lastWeek = getEndpoint(7);

    Axios.get(lastWeek)
        .then(res => {

            const bpi = res.data.bpi;
            const prices = Object.values(bpi);
            const priceLastWeek = prices[0];

            priceCurrent = parseFloat(priceCurrent.replace(/,/g, ''));

            const changeLastWeek = (priceCurrent - priceLastWeek).toFixed(2);
            const changeLastWeekPercent = ((changeLastWeek / priceLastWeek) * 100).toFixed(2);

            component.setState({ changeLastWeek: changeLastWeek, changeLastWeekPercent: changeLastWeekPercent });
        })
        .catch(err => {
            console.log(err);
        });
}

// Historical data
function getHistorical(component, category) {
    // historical data url
    let endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';

    switch (category) {

        case 'week':
            endpoint = getEndpoint(7);
            document.getElementById('period-type').textContent = 'Last Week';
            break;
        case 'month3':
            endpoint = getEndpoint(90);
            document.getElementById('period-type').textContent = 'Last 3 Month';
            break;
        case 'year':
            endpoint = getEndpoint(365);
            document.getElementById('period-type').textContent = 'Last Year';
            break;
        default:
            endpoint = getEndpoint(31);
            document.getElementById('period-type').textContent = 'Last Month';
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

function getAve(arr) {
    let sum = 0;
    let len = arr.length;
    arr.map((element) => {
        sum += element;
    });
    return sum / len;
}


export { fetchNew, setLastWeekChange, getHistorical, getAve };