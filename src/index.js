import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from 'store';

import './index.sass';
import App from './App';
import theme from './theme';
import registerServiceWorker from './registerServiceWorker';
import FirebaseService from 'services/Firebase.service';

FirebaseService.init();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
