import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CoinApp from './components/CoinApp';

ReactDOM.render(<CoinApp />, document.getElementById('root'));
registerServiceWorker();
