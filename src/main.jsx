import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
import { store } from './Redux/store';
import { Provider } from 'react-redux';

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
