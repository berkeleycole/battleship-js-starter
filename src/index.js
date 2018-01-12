import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Battleboard from './components/Battleboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Battleboard />, document.getElementById('root'));
registerServiceWorker();
