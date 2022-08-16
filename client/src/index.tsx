import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { setupStore } from './store/store';

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
