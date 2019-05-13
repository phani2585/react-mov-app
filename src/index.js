import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home/Home';
import 'typeface-roboto';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));


serviceWorker.unregister();
