import Axios from 'axios';

/**
 * Set state to given component with data fetched from endpoint.
 * @param {React.Component} component
 */
function fetchNew(component, changeArr) {
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
            changeArr.forEach(element => {
                setChange(component, usdRate, element);
            });
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
function setChange(component, priceCurrent, numberOfDays) {

    const endpoint = getEndpoint(numberOfDays);

    let periods = component.state.periods;
    let changes = component.state.changes;
    let changesPercent = component.state.changesPercent;

    Axios.get(endpoint)
        .then(res => {

            const bpi = res.data.bpi;
            const prices = Object.values(bpi);
            const priceToCompare = prices[0];

            priceCurrent = parseFloat(priceCurrent.replace(/,/g, ''));

            const change = (priceCurrent - priceToCompare).toFixed(2);
            const changePercent = ((change / priceToCompare) * 100).toFixed(2);

            periods.push(numberOfDays);
            changes.push(change);
            changesPercent.push(changePercent);

            component.setState(
                {
                    periods: numberOfDays,
                    changes: changes,
                    changesPercent: changesPercent
                }
            );
        })
        .catch(err => {
            console.log(err);
        });
}

// Historical data
function getHistorical(component, numberOfDays) {
    // historical data url
    let endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';

    switch (numberOfDays) {

        case 7:
            endpoint = getEndpoint(7);
            break;

        case 31:
            endpoint = getEndpoint(31);
            break;

        case 91:
            endpoint = getEndpoint(91);
            break;

        case 182:
            endpoint = getEndpoint(182);
            break;

        case 365:
            endpoint = getEndpoint(365);
            break;

        case 3000:
            endpoint = getEndpointAll();
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

function getEndpointAll() {
    let historical_endpoint = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    let end = getFormattedDate(1);
    let start = '2010-07-19';
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

export { fetchNew, setChange, getHistorical };