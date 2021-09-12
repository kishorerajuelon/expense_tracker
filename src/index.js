import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';
ReactDOM.render(
    <SpeechProvider appId="238df9c8-6cd7-419e-abba-de14a4278496" language='en-US'>
<Provider>
<App/>
</Provider>
    </SpeechProvider>, 
document.getElementById('root'));