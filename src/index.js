import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MyRouter from './components/MyRouter';

ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();
