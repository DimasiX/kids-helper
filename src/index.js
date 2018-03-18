import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import pic from './images/pic-4.jpg';
console.log(pic);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
